import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeader({
  badge,
  title,
  description,
  align = 'center',
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'mb-8 md:mb-12',
        align === 'center' && 'text-center',
        align === 'left' && 'text-left',
        className
      )}
    >
      {badge && <span className="badge mb-4">{badge}</span>}
      <h2 className="heading-2">{title}</h2>
      {description && (
        <p className="text-body mt-3 max-w-2xl mx-auto">{description}</p>
      )}
    </div>
  );
}
