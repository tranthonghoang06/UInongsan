export function buildTraceUrl(qrCode: string) {
  return `/trace/${encodeURIComponent(qrCode)}`;
}

export function normalizeQrCode(value: string) {
  return value.trim().toUpperCase().replace(/\s+/g, '-');
}
