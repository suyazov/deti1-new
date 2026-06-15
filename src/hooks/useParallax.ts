import { useEffect, useRef } from 'react';

/**
 * Very gentle parallax for background glow orbs.
 * Uses requestAnimationFrame and transforms only, no layout thrashing.
 */
export function useParallax() {
  const ticking = useRef(false);

  useEffect(() => {
    const orbs = document.querySelectorAll<HTMLElement>('.glow-orb');
    if (!orbs.length) return;

    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;

      requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? scrollY / docHeight : 0;

        orbs.forEach((orb, i) => {
          // Alternate direction and speed per orb so they don't move in lockstep
          const speed = 24 + (i % 3) * 12;
          const direction = i % 2 === 0 ? 1 : -1;
          const y = progress * speed * direction;
          orb.style.transform = `translate3d(0, ${y}px, 0)`;
        });

        ticking.current = false;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);
}
