export function isRequired(value: unknown) {
  return value !== null && value !== undefined && String(value).trim().length > 0;
}

export function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function isVietnamesePhone(value: string) {
  return /^(0|\+84)(\d{9,10})$/.test(value.replace(/\s/g, ''));
}
