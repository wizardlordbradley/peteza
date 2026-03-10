'use client';

import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-white border-2 border-brand-red rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow ${className}`}>
      {children}
    </div>
  );
}
