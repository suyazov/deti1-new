import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { Slot } from '@radix-ui/react-slot';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold transition-all duration-200',
  {
    variants: {
      variant: {
        primary: 'bg-coral text-white hover:bg-[#b91c1c] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(220,38,38,0.25)]',
        secondary: 'bg-white text-[#2D3436] border border-black/10 hover:border-[#00897b]/30 hover:bg-[#00897b]/5',
        ghost: 'bg-[#00897b]/10 text-[#00796b] hover:bg-[#00897b]/15',
      },
      size: {
        sm: 'px-4 py-2',
        md: 'px-6 py-3',
        lg: 'px-8 py-3.5',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export interface UiButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export function UiButton({ className, variant, size, asChild = false, ...props }: UiButtonProps) {
  const Comp = asChild ? Slot : 'button';
  return (
    <Comp
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}
