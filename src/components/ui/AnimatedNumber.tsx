import { useEffect, useState, useRef } from 'react';

interface AnimatedNumberProps {
  value: number | string;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
  groupDigits?: boolean;
}

function parseNumber(value: number | string): number {
  if (typeof value === 'number') return value;
  const cleaned = value.replace(/[^\d.]/g, '');
  const num = parseFloat(cleaned);
  return Number.isNaN(num) ? 0 : num;
}

export function AnimatedNumber({
  value,
  suffix = '',
  prefix = '',
  duration = 1500,
  className,
  groupDigits = true,
}: AnimatedNumberProps) {
  const [display, setDisplay] = useState(prefix + '0' + suffix);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const target = parseNumber(value);
    const isFloat = !Number.isInteger(target);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            const startTime = performance.now();
            const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);

            const step = (now: number) => {
              const elapsed = now - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const current = target * easeOutQuart(progress);
              const rounded = isFloat ? current : Math.round(current);
              const formatted = isFloat
                ? rounded.toFixed(1)
                : groupDigits
                  ? Math.round(rounded).toLocaleString('ru-RU')
                  : Math.round(rounded).toString();
              setDisplay(prefix + formatted + suffix);

              if (progress < 1) {
                requestAnimationFrame(step);
              }
            };

            requestAnimationFrame(step);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, suffix, prefix, duration, hasAnimated, groupDigits]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
