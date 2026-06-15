import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const cardVariants = cva(
  'rounded-3xl transition-all duration-300',
  {
    variants: {
      variant: {
        default: 'bg-white shadow-card border border-black/5',
        outlined: 'bg-white border border-black/5',
        filled: 'bg-white shadow-card',
        hover: 'bg-white shadow-card border border-black/5 hover:shadow-card-hover hover:-translate-y-1',
      },
      padding: {
        none: '',
        sm: 'p-4',
        md: 'p-5 md:p-6',
        lg: 'p-6 md:p-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      padding: 'md',
    },
  }
);

export interface UiCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

export function UiCard({ className, variant, padding, ...props }: UiCardProps) {
  return (
    <div
      className={cn(cardVariants({ variant, padding }), className)}
      {...props}
    />
  );
}
