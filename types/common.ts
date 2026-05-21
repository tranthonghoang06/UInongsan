export type EntityStatus = 'active' | 'inactive' | 'draft' | 'archived';

export interface SelectOption {
  value: string;
  label: string;
}

export interface PageParams<T extends Record<string, string> = Record<string, string>> {
  params: Promise<T>;
}

export interface TimelineItem {
  title: string;
  description?: string;
  date?: string;
  status?: 'done' | 'current' | 'pending';
}
