import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const iconBoxVariants = cva(
  'flex items-center justify-center rounded-xl',
  {
    variants: {
      size: {
        sm: 'w-9 h-9',
        md: 'w-10 h-10',
        lg: 'w-11 h-11',
      },
      variant: {
        teal: 'bg-[#00897b]/10 text-[#00897b]',
        coral: 'bg-[#dc2626]/10 text-[#dc2626]',
        pastel: 'bg-sky-100 text-sky-600',
      },
    },
    defaultVariants: {
      size: 'md',
      variant: 'teal',
    },
  }
);

const iconSizeVariants = cva('', {
  variants: {
    size: {
      sm: 'w-4 h-4',
      md: 'w-5 h-5',
      lg: 'w-6 h-6',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export interface UiIconBoxProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof iconBoxVariants> {
  icon: React.ElementType;
}

export function UiIconBox({ className, size, variant, icon: Icon }: UiIconBoxProps) {
  return (
    <div className={cn(iconBoxVariants({ size, variant }), className)}>
      <Icon className={cn(iconSizeVariants({ size }))} />
    </div>
  );
}
