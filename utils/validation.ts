export function isRequired(value: string) {
  return value.trim().length > 0;
}

export function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export function isValidVietnamPhone(value: string) {
  return /^(0|\+84)(\d{9})$/.test(value.trim().replace(/\s/g, ''));
}

export function hasMinLength(value: string, minLength: number) {
  return value.trim().length >= minLength;
}
