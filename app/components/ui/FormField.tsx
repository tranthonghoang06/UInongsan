import Input from '@/app/components/ui/Input';
import Select from '@/app/components/ui/Select';
import Textarea from '@/app/components/ui/Textarea';

interface FormFieldProps {
  type?: 'text' | 'number' | 'date' | 'textarea' | 'select';
  label: string;
  placeholder?: string;
  options?: Array<{ value: string; label: string }>;
  helperText?: string;
}

export default function FormField({ type = 'text', label, placeholder, options = [], helperText }: FormFieldProps) {
  if (type === 'textarea') {
    return <Textarea label={label} placeholder={placeholder} helperText={helperText} />;
  }

  if (type === 'select') {
    return <Select label={label} options={options} helperText={helperText} />;
  }

  return <Input type={type} label={label} placeholder={placeholder} helperText={helperText} />;
}
