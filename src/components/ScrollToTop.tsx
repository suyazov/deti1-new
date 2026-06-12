import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const CIRCLE_RADIUS = 22;
const CIRCLE_CIRCUMFERENCE = 2 * Math.PI * CIRCLE_RADIUS;

export function ScrollToTop() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = docHeight > 0 ? scrollTop / docHeight : 0;
      setProgress(Math.min(Math.max(scrollProgress, 0), 1));
      setVisible(scrollTop > 300);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const dashOffset = CIRCLE_CIRCUMFERENCE * (1 - progress);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#0a1f1f] border border-white/10 shadow-lg shadow-black/30 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-[#00c9a7]/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00c9a7]/50 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      aria-label="Наверх"
      title="Наверх"
    >
      <svg
        className="absolute inset-0 w-full h-full -rotate-90"
        viewBox={`0 0 ${CIRCLE_RADIUS * 2 + 8} ${CIRCLE_RADIUS * 2 + 8}`}
        fill="none"
      >
        {/* Background track */}
        <circle
          cx={CIRCLE_RADIUS + 4}
          cy={CIRCLE_RADIUS + 4}
          r={CIRCLE_RADIUS}
          stroke="rgba(255, 255, 255, 0.08)"
          strokeWidth="3"
        />
        {/* Progress indicator */}
        <circle
          cx={CIRCLE_RADIUS + 4}
          cy={CIRCLE_RADIUS + 4}
          r={CIRCLE_RADIUS}
          stroke="#00c9a7"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray={CIRCLE_CIRCUMFERENCE}
          strokeDashoffset={dashOffset}
          className="transition-[stroke-dashoffset] duration-150"
        />
      </svg>
      <ArrowUp className="relative z-10 w-5 h-5 text-white" />
    </button>
  );
}
