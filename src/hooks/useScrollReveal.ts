import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    const selectors = '.scroll-reveal, .blur-reveal, .text-reveal-line';
    const revealElements = () => {
      const elements = document.querySelectorAll(selectors);
      const viewportHeight = window.innerHeight;
      elements.forEach((el) => {
        if (el.classList.contains('revealed')) return;
        const rect = el.getBoundingClientRect();
        if (rect.top < viewportHeight * 0.92 && rect.bottom > 0) {
          el.classList.add('revealed');
        }
      });
    };

    revealElements();
    window.addEventListener('scroll', revealElements, { passive: true });
    window.addEventListener('resize', revealElements, { passive: true });

    return () => {
      window.removeEventListener('scroll', revealElements);
      window.removeEventListener('resize', revealElements);
    };
  }, []);
}
