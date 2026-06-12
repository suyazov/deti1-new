import { useRef, useState, useEffect } from 'react';

const lines = [
  'Можно просто открыть детский сад,',
  'а можно создать бизнес,',
  'который меняет будущее детей',
];

export function TextReveal() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = rect.height;
      const centerOffset = rect.top + sectionHeight / 2 - windowHeight / 2;
      const raw = 1 - Math.abs(centerOffset) / (sectionHeight / 2 + windowHeight / 2);
      setProgress(Math.max(0, Math.min(1, raw)));
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[28vh] sm:min-h-[38vh] lg:min-h-[55vh] xl:min-h-[45vh] section-dark flex items-center justify-center overflow-hidden py-8 sm:py-10 lg:py-0"
    >
      <div className="glow-orb w-[600px] h-[600px] bg-[#00c9a7]/10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="relative z-10 max-w-[1100px] mx-auto px-5 text-center">
        {lines.map((line, i) => {
          const lineProgress = Math.max(0, Math.min(1, progress * 3 - i * 0.8));
          const blur = Math.max(0, 12 - lineProgress * 12);
          const opacity = Math.max(0, lineProgress);
          const y = Math.max(0, 30 - lineProgress * 30);

          return (
            <p
              key={i}
              className="text-[clamp(22px,6vw,56px)] sm:text-[clamp(28px,5vw,56px)] xl:text-[clamp(24px,4vw,48px)] font-bold leading-[1.2] tracking-tight text-white"
              style={{
                filter: `blur(${blur}px)`,
                opacity,
                transform: `translateY(${y}px)`,
                transition: 'filter 0.1s linear, opacity 0.1s linear, transform 0.1s linear',
              }}
            >
              {i === 2 ? (
                <>
                  который <span className="text-gradient">меняет будущее</span> детей
                </>
              ) : (
                line
              )}
            </p>
          );
        })}
      </div>
    </section>
  );
}
