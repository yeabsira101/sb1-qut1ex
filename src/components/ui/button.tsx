import { cn } from '@/lib/utils';
import React, { forwardRef, ElementType } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  as?: ElementType;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', as: Component = 'button', ...props }, ref) => {
    const buttonClasses = cn(
      'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
      {
        'bg-blue-600 text-white hover:bg-blue-700': variant === 'primary',
        'bg-gray-100 text-gray-900 hover:bg-gray-200': variant === 'secondary',
        'border border-gray-300 bg-transparent hover:bg-gray-100': variant === 'outline',
        'h-8 px-3 text-sm': size === 'sm',
        'h-10 px-4 text-base': size === 'md',
        'h-12 px-6 text-lg': size === 'lg',
      },
      className
    );

    return <Component className={buttonClasses} ref={ref} {...props} />;
  }
);