import React from 'react';

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  actions?: React.ReactNode;
}

export default function PageHeader({ eyebrow, title, description, actions }: PageHeaderProps) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
      <div>
        {eyebrow && <p className="text-sm font-bold uppercase tracking-wide text-[#16A34A]">{eyebrow}</p>}
        <h1 className="mt-1 text-xl font-bold leading-tight text-[#163B24] sm:text-3xl">{title}</h1>
        {description && <p className="mt-1.5 text-sm leading-6 text-gray-600 sm:text-base">{description}</p>}
      </div>
      {actions && <div className="w-full shrink-0 sm:w-auto">{actions}</div>}
    </div>
  );
}
