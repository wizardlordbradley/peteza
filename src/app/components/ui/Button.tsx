'use client';

import { ButtonHTMLAttributes } from 'react';

export type ButtonVariant = 'primary' | 'secondary';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export default function Button({ 
  variant = 'primary', 
  className = '', 
  children, 
  ...props 
}: ButtonProps) {
  const baseStyles = 'px-8 py-3 rounded-full font-semibold transition-colors';
  
  const variants = {
    primary: 'bg-brand-red text-white hover:bg-brand-red-light',
    secondary: 'border-2 border-brand-red text-brand-red hover:bg-brand-red hover:text-white'
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
