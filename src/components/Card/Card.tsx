'use client';

import React, { ReactNode } from 'react';

export interface CardProps {
  label: string;
  icon: ReactNode;
  onClick?: () => void;
}

const Card = ({ label, icon, onClick }: CardProps) => (
  <button
    type="button"
    onClick={onClick}
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      padding: 'var(--spacing-12) var(--spacing-16)',
      gap: 'var(--spacing-32)',
      backgroundColor: 'var(--color-bg-primary)',
      borderRadius: 'var(--radius-12)',
      border: 'none',
      cursor: onClick ? 'pointer' : 'default',
      width: '100%',
      textAlign: 'left',
      fontFamily: 'var(--font-family-base)',
      transition: 'background-color 0.15s ease',
    }}
  >
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 24,
      height: 24,
      fontSize: 20,
      flexShrink: 0,
    }}>
      {icon}
    </span>
    <span style={{
      fontSize: 'var(--font-size-16)',
      fontWeight: 'var(--font-weight-semibold)',
      lineHeight: 'var(--line-height-24)',
      color: 'var(--color-text-primary)',
      letterSpacing: 'var(--letter-spacing-0)',
    }}>
      {label}
    </span>
  </button>
);

export default Card;
