import type React from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div
      className={cn('container mx-auto px-4 sm:px-6 md:px-12 lg:px-20', className)}
      {...props}
    >
      {children}
    </div>
  );
}
