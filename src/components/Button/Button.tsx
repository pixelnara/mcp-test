'use client';

import React, { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonVariant = 'primary' | 'search' | 'ghost';
export type IconPosition  = 'left' | 'right';

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  label?:        string;
  icon?:         ReactNode;
  iconPosition?: IconPosition;
  variant?:      ButtonVariant;
  disabled?:     boolean;
  type?:         'button' | 'submit' | 'reset';
}

const Button = ({
  label,
  icon,
  iconPosition = 'left',
  variant = 'primary',
  disabled = false,
  onClick,
  className = '',
  type = 'button',
  ...rest
}: ButtonProps) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;
    onClick?.(e);
  };

  return (
    <button
      type={type}
      className={['btn', `btn--${variant}`, disabled ? 'btn--disabled' : '', className]
        .filter(Boolean)
        .join(' ')}
      disabled={disabled}
      onClick={handleClick}
      aria-disabled={disabled}
      {...rest}
    >
      {(variant === 'search' || variant === 'ghost') && icon && (
        <span className="btn__icon">{icon}</span>
      )}

      {variant === 'primary' && (
        <>
          {icon && iconPosition === 'left'  && <span className="btn__icon">{icon}</span>}
          {label && <span className="btn__label">{label}</span>}
          {icon && iconPosition === 'right' && <span className="btn__icon">{icon}</span>}
        </>
      )}
    </button>
  );
};

export default Button;
