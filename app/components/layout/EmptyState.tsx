import React from 'react';

interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
}

const EmptyState: React.FC<EmptyStateProps> = ({
  icon,
  title,
  description,
  action,
}) => {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-[#BBF7D0] bg-[#F0FDF4] px-4 py-10 text-center sm:py-16">
      {icon && <div className="mb-3 text-4xl text-gray-400 sm:mb-4 sm:text-5xl">{icon}</div>}
      <h3 className="mb-2 text-lg font-bold text-[#163B24] sm:text-xl">{title}</h3>
      {description && <p className="mb-5 max-w-sm text-sm leading-6 text-gray-600 sm:mb-6 sm:text-base">{description}</p>}
      {action && (
        <button
          onClick={action.onClick}
          className="min-h-10 rounded-xl bg-[#16A34A] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#15803D] sm:min-h-11 sm:px-5 sm:py-3 sm:text-base"
        >
          {action.label}
        </button>
      )}
    </div>
  );
};

export default EmptyState;
