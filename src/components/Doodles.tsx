import { cn } from '@/lib/utils';

interface DoodleProps {
  className?: string;
}

export function DoodleCloud({ className }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('w-24 h-24', className)}
      aria-hidden="true"
    >
      <path
        d="M35 85c-13.8 0-25-11.2-25-25 0-11.8 8.2-21.7 19.2-24.3C31.5 21.8 45.3 12 61.5 12c19.2 0 35 14.3 37.4 32.8C108.6 48.5 117 59.2 117 72c0 13.8-11.2 25-25 25H35z"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M42 72c3 4 8 7 16 7s13-3 16-7"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <circle cx="48" cy="55" r="3" fill="currentColor" />
      <circle cx="72" cy="55" r="3" fill="currentColor" />
      <path
        d="M50 95v14M70 95v14"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <circle cx="55" cy="108" r="4" fill="currentColor" />
      <circle cx="75" cy="108" r="4" fill="currentColor" />
    </svg>
  );
}

export function DoodleScribble({ className }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('w-24 h-24', className)}
      aria-hidden="true"
    >
      <path
        d="M30 60c5-20 25-35 45-30s30 30 20 50-40 30-60 15-15-45 10-60 50-10 65 15"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M45 50c10-5 25-5 35 5s10 25 0 35"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function DoodleStar({ className }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('w-20 h-20', className)}
      aria-hidden="true"
    >
      <path
        d="M60 10l12 38h40L78 72l12 38-30-22-30 22 12-38L8 48h40L60 10z"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="60" cy="60" r="6" fill="currentColor" />
    </svg>
  );
}

export function DoodleSmile({ className }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('w-20 h-20', className)}
      aria-hidden="true"
    >
      <circle cx="50" cy="50" r="42" stroke="currentColor" strokeWidth="4" />
      <circle cx="36" cy="42" r="4" fill="currentColor" />
      <circle cx="64" cy="42" r="4" fill="currentColor" />
      <path
        d="M35 62c5 10 25 10 30 0"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function DoodleBlob({ className }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('w-32 h-32 opacity-20', className)}
      aria-hidden="true"
    >
      <path d="M95.5 65c-5 25-30 45-55 40S2.5 80 7.5 55 37.5 10 62.5 15s38 25 33 50z" />
    </svg>
  );
}

export function DoodleDots({ className }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('w-16 h-16', className)}
      aria-hidden="true"
    >
      <circle cx="10" cy="10" r="6" />
      <circle cx="40" cy="10" r="6" />
      <circle cx="70" cy="10" r="6" />
      <circle cx="10" cy="40" r="6" />
      <circle cx="40" cy="40" r="6" />
      <circle cx="70" cy="40" r="6" />
      <circle cx="10" cy="70" r="6" />
      <circle cx="40" cy="70" r="6" />
      <circle cx="70" cy="70" r="6" />
    </svg>
  );
}
