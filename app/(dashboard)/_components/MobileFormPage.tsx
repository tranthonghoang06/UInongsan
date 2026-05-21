'use client';

import React from 'react';
import Link from 'next/link';
import Button from '@/app/components/ui/Button';
import Input from '@/app/components/ui/Input';
import Select from '@/app/components/ui/Select';
import Textarea from '@/app/components/ui/Textarea';
import { Save } from 'lucide-react';

type FormField =
  | { type: 'input'; label: string; placeholder?: string; inputType?: string; helperText?: string }
  | { type: 'select'; label: string; options: Array<{ value: string; label: string }>; helperText?: string }
  | { type: 'textarea'; label: string; placeholder?: string; helperText?: string };

interface MobileFormPageProps {
  title: string;
  description: string;
  backHref: string;
  submitLabel: string;
  fields: FormField[];
}

export default function MobileFormPage({ title, description, backHref, submitLabel, fields }: MobileFormPageProps) {
  return (
    <div className="space-y-4 p-3 pb-24 sm:space-y-6 sm:p-6 md:pb-6">
      <div>
        <h1 className="text-xl font-bold leading-tight text-[#163B24] sm:text-3xl">{title}</h1>
        <p className="mt-1.5 text-sm leading-6 text-gray-600 sm:mt-2 sm:text-base">{description}</p>
      </div>

      <section className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100 sm:p-6">
        <div className="space-y-4">
          {fields.map((field) => {
            if (field.type === 'select') {
              return <Select key={field.label} label={field.label} options={field.options} helperText={field.helperText} />;
            }

            if (field.type === 'textarea') {
              return <Textarea key={field.label} label={field.label} placeholder={field.placeholder} helperText={field.helperText} />;
            }

            return <Input key={field.label} label={field.label} type={field.inputType ?? 'text'} placeholder={field.placeholder} helperText={field.helperText} />;
          })}

          <div className="grid gap-3 pt-2 sm:grid-cols-2">
            <Button variant="primary" size="md">
              <Save className="h-5 w-5" />
              {submitLabel}
            </Button>
            <Link href={backHref}>
              <Button variant="outline" size="md" className="w-full">
                Hủy
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
