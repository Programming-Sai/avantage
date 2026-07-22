import type { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  href?: string;
};

export function Button({ children, variant = 'primary', href = '#' }: ButtonProps) {
  const base = 'inline-flex items-center justify-center px-6 py-3 text-sm font-semibold transition-colors';
  const styles =
    variant === 'primary'
      ? 'bg-[#D48C2B] text-white hover:bg-[#D96B27]'
      : 'bg-[#0D1B2A] text-white hover:bg-[#0A1128]';

  return (
    <a href={href} className={`${base} ${styles}`}>
      {children}
    </a>
  );
}

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = '' }: CardProps) {
  return <div className={`bg-white ${className}`}>{children}</div>;
}
