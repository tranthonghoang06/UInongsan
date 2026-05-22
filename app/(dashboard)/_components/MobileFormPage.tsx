'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Button from '@/app/components/ui/Button';
import Input from '@/app/components/ui/Input';
import Select from '@/app/components/ui/Select';
import Textarea from '@/app/components/ui/Textarea';
import { useToast } from '@/app/components/ui/ToastProvider';
import { isRequired, isValidEmail, isValidVietnamPhone } from '@/utils/validation';
import { Save } from 'lucide-react';

type FormField =
  | { type: 'input'; label: string; placeholder?: string; inputType?: string; helperText?: string; required?: boolean }
  | { type: 'select'; label: string; options: Array<{ value: string; label: string }>; helperText?: string; required?: boolean }
  | { type: 'textarea'; label: string; placeholder?: string; helperText?: string; required?: boolean };

interface MobileFormPageProps {
  title: string;
  description: string;
  backHref: string;
  submitLabel: string;
  fields: FormField[];
}

function isFieldRequired(field: FormField) {
  if (field.required !== undefined) {
    return field.required;
  }

  return !field.label.toLowerCase().includes('ghi chú');
}

export default function MobileFormPage({ title, description, backHref, submitLabel, fields }: MobileFormPageProps) {
  const toast = useToast();
  const [values, setValues] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  const updateField = (label: string, value: string) => {
    setValues((current) => ({ ...current, [label]: value }));
    setErrors((current) => ({ ...current, [label]: '' }));
  };

  const handleSubmit = () => {
    const nextErrors = fields.reduce<Record<string, string>>((fieldErrors, field) => {
      const value = values[field.label] ?? '';
      const required = isFieldRequired(field);

      if (required && !isRequired(value)) {
        fieldErrors[field.label] = `${field.label} không được để trống.`;
        return fieldErrors;
      }

      if (value && field.type === 'input' && field.inputType === 'email' && !isValidEmail(value)) {
        fieldErrors[field.label] = 'Email chưa hợp lệ.';
      }

      if (value && field.type === 'input' && field.label.toLowerCase().includes('điện thoại') && !isValidVietnamPhone(value)) {
        fieldErrors[field.label] = 'Số điện thoại chưa hợp lệ.';
      }

      if (value && field.type === 'input' && field.inputType === 'number' && Number(value) <= 0) {
        fieldErrors[field.label] = `${field.label} phải lớn hơn 0.`;
      }

      return fieldErrors;
    }, {});

    setErrors(nextErrors);

    if (Object.values(nextErrors).some(Boolean)) {
      toast.error({ title: 'Thông tin chưa hợp lệ', message: 'Vui lòng kiểm tra các trường đang báo lỗi.' });
      return;
    }

    toast.success({ title: 'Đã lưu thông tin', message: submitLabel });
  };

  return (
    <div className="space-y-4 p-3 pb-24 sm:space-y-6 sm:p-6 md:pb-6">
      <div>
        <h1 className="text-xl font-bold leading-tight text-[#163B24] sm:text-3xl">{title}</h1>
        <p className="mt-1.5 text-sm leading-6 text-gray-600 sm:mt-2 sm:text-base">{description}</p>
      </div>

      <section className="rounded-2xl border border-[#BBF7D0] bg-white p-3.5 shadow-sm shadow-green-100 sm:p-6">
        <div className="space-y-4">
          {fields.map((field) => {
            const required = isFieldRequired(field);
            const value = values[field.label] ?? '';

            if (field.type === 'select') {
              return (
                <Select
                  key={field.label}
                  label={field.label}
                  value={value}
                  onChange={(event) => updateField(field.label, event.target.value)}
                  options={field.options}
                  helperText={field.helperText}
                  error={errors[field.label]}
                  required={required}
                />
              );
            }

            if (field.type === 'textarea') {
              return (
                <Textarea
                  key={field.label}
                  label={field.label}
                  value={value}
                  onChange={(event) => updateField(field.label, event.target.value)}
                  placeholder={field.placeholder}
                  helperText={field.helperText}
                  error={errors[field.label]}
                  required={required}
                />
              );
            }

            return (
              <Input
                key={field.label}
                label={field.label}
                type={field.inputType ?? 'text'}
                value={value}
                onChange={(event) => updateField(field.label, event.target.value)}
                placeholder={field.placeholder}
                helperText={field.helperText}
                error={errors[field.label]}
                required={required}
              />
            );
          })}

          <div className="grid gap-3 pt-2 sm:grid-cols-2">
            <Button type="button" variant="primary" size="md" onClick={handleSubmit}>
              <Save className="h-5 w-5" />
              {submitLabel}
            </Button>
            <Link href={backHref}>
              <Button type="button" variant="outline" size="md" className="w-full">
                Hủy
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
