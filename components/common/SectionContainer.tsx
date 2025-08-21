import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
  id?: string;
  scrollable?: boolean; // 新增属性：是否可滚动
  maxHeight?: string; // 新增属性：最大高度
}

export default function SectionContainer({
  children,
  className,
  id,
  scrollable = false,
  maxHeight = '400px'
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={cn(
        'py-16 md:py-24',
        className
      )}
    >
      <div 
        className={cn(
          "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
          scrollable && "overflow-y-auto" // 添加滚动条
        )}
        style={scrollable ? { maxHeight, scrollbarWidth: 'thin' } : {}}
      >
        {children}
      </div>
    </section>
  );
}