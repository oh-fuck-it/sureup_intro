import { cn } from '../lib/cn';

interface GlassPanelProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'subtle' | 'strong';
  as?: 'div' | 'section' | 'article';
}

export function GlassPanel({
  children,
  className,
  variant = 'default',
  as: Tag = 'div',
}: GlassPanelProps) {
  const variantClass = {
    default: 'glass',
    subtle: 'glass-subtle',
    strong: 'glass-strong',
  }[variant];

  return (
    <Tag className={cn('rounded-2xl', variantClass, className)}>
      {children}
    </Tag>
  );
}
