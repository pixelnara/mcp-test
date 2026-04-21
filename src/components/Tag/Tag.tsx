'use client';

import React from 'react';

export interface TagProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
}

const Tag = ({ label, onClick, disabled = false }: TagProps) => (
  <button
    type="button"
    onClick={disabled ? undefined : onClick}
    disabled={disabled}
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      padding: 'var(--spacing-10) var(--spacing-14)',
      backgroundColor: 'var(--color-bg-primary)',
      border: '1px solid var(--color-border-default)',
      borderRadius: 'var(--radius-full)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      fontFamily: 'var(--font-family-base)',
      fontSize: 'var(--font-size-14)',
      fontWeight: 'var(--font-weight-semibold)',
      lineHeight: 'var(--line-height-20)',
      color: 'var(--color-text-primary)',
      letterSpacing: 'var(--letter-spacing-0)',
      whiteSpace: 'nowrap',
      transition: 'background-color 0.15s ease',
    }}
  >
    {label}
  </button>
);

export default Tag;
