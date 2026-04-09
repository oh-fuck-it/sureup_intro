import { useState, useCallback, useRef, useEffect } from 'react';

export function useSlideScroll(totalSlides: number) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const slides = container.querySelectorAll('.slide');
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            const idx = Array.from(slides).indexOf(entry.target as Element);
            if (idx >= 0) setCurrentIndex(idx);
          }
        }
      },
      { root: container, threshold: 0.5 },
    );

    slides.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [totalSlides]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      const down = e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ';
      const up = e.key === 'ArrowUp' || e.key === 'PageUp';

      if (down) {
        e.preventDefault();
        goTo(Math.min(currentIndex + 1, totalSlides - 1));
      } else if (up) {
        e.preventDefault();
        goTo(Math.max(currentIndex - 1, 0));
      } else if (e.key === 'Home') {
        e.preventDefault();
        goTo(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        goTo(totalSlides - 1);
      }
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [currentIndex, totalSlides]);

  const goTo = useCallback((index: number) => {
    const container = containerRef.current;
    if (!container) return;
    const slides = container.querySelectorAll('.slide');
    slides[index]?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return { containerRef, currentIndex, goTo };
}
