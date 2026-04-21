'use client';

import React, { useState } from 'react';
import Button from '@/components/Button';

const ChevronIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M3.5 5L7 8.5L10.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <circle cx="6.5" cy="6.5" r="5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M10.5 10.5L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export interface SearchBarProps {
  placeholder?: string;
  dropdownLabel?: string;
  onSearch?: (value: string) => void;
  onDropdownClick?: () => void;
  disabled?: boolean;
}

const SearchBar = ({
  placeholder = '검색어를 입력해주세요',
  dropdownLabel = '중고거래',
  onSearch,
  onDropdownClick,
  disabled = false,
}: SearchBarProps) => {
  const [value, setValue] = useState('');

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      height: 50,
      paddingLeft: 'var(--spacing-20)',
      paddingRight: 1,
      paddingTop: 1,
      paddingBottom: 1,
      border: '1px solid var(--color-border-default)',
      borderRadius: 'var(--radius-full)',
      backgroundColor: 'var(--color-bg-primary)',
      width: '100%',
      maxWidth: 754,
      boxSizing: 'border-box',
    }}>

      {/* 카테고리 드롭다운 */}
      <button
        type="button"
        onClick={onDropdownClick}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--spacing-4)',
          paddingRight: 'var(--spacing-10)',
          borderTop: 'none',
          borderLeft: 'none',
          borderBottom: 'none',
          borderRight: '1px solid var(--color-border-default)',
          background: 'transparent',
          cursor: 'pointer',
          fontFamily: 'var(--font-family-base)',
          fontSize: 'var(--font-size-16)',
          fontWeight: 'var(--font-weight-semibold)',
          lineHeight: 'var(--line-height-24)',
          color: 'var(--color-text-secondary)',
          letterSpacing: 'var(--letter-spacing-0)',
          whiteSpace: 'nowrap',
          height: 24,
          flexShrink: 0,
        }}
      >
        {dropdownLabel}
        <ChevronIcon />
      </button>

      {/* 검색 입력 */}
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && onSearch?.(value)}
        placeholder={placeholder}
        disabled={disabled}
        style={{
          flex: 1,
          border: 'none',
          outline: 'none',
          background: 'transparent',
          paddingLeft: 'var(--spacing-16)',
          paddingRight: 'var(--spacing-16)',
          fontFamily: 'var(--font-family-base)',
          fontSize: 'var(--font-size-16)',
          fontWeight: 'var(--font-weight-semibold)',
          color: 'var(--color-text-primary)',
          letterSpacing: 'var(--letter-spacing-0)',
        }}
      />

      {/* 검색 버튼 */}
      <Button
        variant="search"
        icon={<SearchIcon />}
        onClick={() => onSearch?.(value)}
        disabled={disabled}
      />
    </div>
  );
};

export default SearchBar;
