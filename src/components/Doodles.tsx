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

export function DoodleHeart({ className }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('w-20 h-20', className)}
      aria-hidden="true"
    >
      <path
        d="M50 85C50 85 15 60 15 35c0-13.8 11.2-25 25-25 7.5 0 14.2 3.3 18.8 8.5C63.3 13.3 70 10 77.5 10 91.3 10 100 21.2 100 35c0 25-35 50-35 50s-7.5-5-15-5"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function DoodleZigzag({ className }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 120 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('w-28 h-10', className)}
      aria-hidden="true"
    >
      <path
        d="M5 30l20-20 20 20 20-20 20 20 20-20"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function DoodleSpiral({ className }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('w-24 h-24', className)}
      aria-hidden="true"
    >
      <path
        d="M50 50c0-15 10-25 25-25s25 15 25 30-15 30-35 30-40-20-40-45 25-45 50-45"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function DoodleConfetti({ className }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('w-20 h-20', className)}
      aria-hidden="true"
    >
      <circle cx="15" cy="25" r="5" />
      <rect x="40" y="15" width="8" height="8" rx="2" />
      <circle cx="75" cy="30" r="6" />
      <rect x="20" y="55" width="6" height="6" rx="2" />
      <circle cx="55" cy="65" r="5" />
      <rect x="80" y="70" width="8" height="8" rx="2" />
      <circle cx="35" cy="85" r="4" />
    </svg>
  );
}

export function DoodleFlower({ className }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('w-20 h-20', className)}
      aria-hidden="true"
    >
      <circle cx="50" cy="35" r="10" fill="currentColor" />
      <circle cx="65" cy="50" r="10" fill="currentColor" />
      <circle cx="50" cy="65" r="10" fill="currentColor" />
      <circle cx="35" cy="50" r="10" fill="currentColor" />
      <circle cx="50" cy="50" r="8" fill="white" />
      <path d="M50 73v20" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

export function DoodleLightning({ className }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 100 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('w-20 h-28', className)}
      aria-hidden="true"
    >
      <path
        d="M55 2L15 72h35L35 138l55-75H55L85 2H55z"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function DoodleArrow({ className }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 120 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('w-28 h-20', className)}
      aria-hidden="true"
    >
      <path
        d="M5 55c25-20 55-25 85-15M75 20l25 20-25 20"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function DoodleWave({ className }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 120 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('w-28 h-14', className)}
      aria-hidden="true"
    >
      <path
        d="M5 30c15-25 30 0 45-15s30 0 45-15c10-8 20 10 20 30"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function DoodleCrown({ className }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 100 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('w-20 h-16', className)}
      aria-hidden="true"
    >
      <path
        d="M10 60l10-40 15 20 20-30 15 30 15-20 10 40H10z"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="20" cy="20" r="4" fill="currentColor" />
      <circle cx="50" cy="12" r="4" fill="currentColor" />
      <circle cx="80" cy="20" r="4" fill="currentColor" />
    </svg>
  );
}

export function DoodleMusic({ className }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 100 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('w-16 h-20', className)}
      aria-hidden="true"
    >
      <path
        d="M35 95V35l45-10v50"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="28" cy="95" r="12" stroke="currentColor" strokeWidth="5" />
      <circle cx="73" cy="75" r="12" stroke="currentColor" strokeWidth="5" />
    </svg>
  );
}

export function DoodleInfinity({ className }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 120 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('w-28 h-16', className)}
      aria-hidden="true"
    >
      <path
        d="M30 35c-15 0-25-10-25-20S15 5 30 5c15 0 30 20 30 30 0 10 15 30 30 30 15 0 25-10 25-20S105 25 90 25c-15 0-30 20-30 30 0 10-15 30-30 30"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function DoodleSparkle({ className }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('w-16 h-16', className)}
      aria-hidden="true"
    >
      <path d="M50 0c2 20 30 48 50 50-20 2-48 30-50 50-2-20-30-48-50-50 20-2 48-30 50-50z" />
    </svg>
  );
}
