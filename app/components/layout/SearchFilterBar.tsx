'use client';

import React from 'react';
import Input from '@/app/components/ui/Input';
import Select from '@/app/components/ui/Select';
import Button from '@/app/components/ui/Button';
import { Search, X } from 'lucide-react';

interface SearchFilterBarProps {
  onSearch: (query: string) => void;
  onFilterChange: (filters: Record<string, string>) => void;
  filterOptions?: Array<{
    key: string;
    label: string;
    options: Array<{ value: string; label: string }>;
  }>;
  showReset?: boolean;
}

const SearchFilterBar: React.FC<SearchFilterBarProps> = ({
  onSearch,
  onFilterChange,
  filterOptions = [],
  showReset = true,
}) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [filters, setFilters] = React.useState<Record<string, string>>({});

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    onSearch(value);
  };

  const handleFilterChange = (key: string, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleReset = () => {
    setSearchQuery('');
    setFilters({});
    onSearch('');
    onFilterChange({});
  };

  return (
    <div className="space-y-3 rounded-2xl border border-[#BBF7D0] bg-white p-3 shadow-sm shadow-green-100 sm:space-y-4 sm:p-4">
      {/* Search Input */}
      <div>
        <Input
          placeholder="Tìm kiếm..."
          value={searchQuery}
          onChange={(e) => handleSearchChange(e.target.value)}
          icon={<Search className="h-4 w-4" />}
        />
      </div>

      {/* Filters Grid */}
      {filterOptions.length > 0 && (
        <div className="grid min-w-0 gap-2.5 sm:grid-cols-2 sm:gap-3 lg:grid-cols-4">
          {filterOptions.map((filterOption) => (
            <Select
              key={filterOption.key}
              label={filterOption.label}
              options={filterOption.options}
              value={filters[filterOption.key] || ''}
              onChange={(e) => handleFilterChange(filterOption.key, e.target.value)}
            />
          ))}
        </div>
      )}

      {/* Reset Button */}
      {showReset && (Object.keys(filters).length > 0 || searchQuery) && (
        <div className="flex justify-end">
          <Button
            variant="outline"
            size="sm"
            onClick={handleReset}
            className="w-full gap-2 sm:w-auto"
          >
            <X className="h-4 w-4" />
            Xóa lọc
          </Button>
        </div>
      )}
    </div>
  );
};

export default SearchFilterBar;
