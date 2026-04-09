import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/cn';
import type { ImageItem } from '../slides/types';
import { MockupFrame } from './MockupFrame';
import { ImageLightbox } from './ImageLightbox';

interface ImageCarouselProps {
  images: ImageItem[];
  className?: string;
  /** Auto-switch interval in ms, default 4000 */
  interval?: number;
}

export function ImageCarousel({
  images,
  className,
  interval = 4000,
}: ImageCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const resetRef = useRef(0); // bump to reset auto-rotation timer

  const goTo = useCallback(
    (idx: number) => {
      setDirection(idx > current ? 1 : -1);
      setCurrent(idx);
      resetRef.current += 1;
    },
    [current],
  );

  const goNext = useCallback(() => {
    setDirection(1);
    setCurrent(prev => (prev + 1) % images.length);
    resetRef.current += 1;
  }, [images.length]);

  const goPrev = useCallback(() => {
    setDirection(-1);
    setCurrent(prev => (prev - 1 + images.length) % images.length);
    resetRef.current += 1;
  }, [images.length]);

  // Auto-rotation, resets when resetRef changes
  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images.length, interval, resetRef.current]);

  if (images.length === 0) return null;

  const currentItem = images[current]!;
  const caption = currentItem.caption || currentItem.alt;
  const hasRealImage = !!currentItem.src;

  const variants = {
    enter: (d: number) => ({
      x: d > 0 ? 60 : -60,
      opacity: 0,
      scale: 0.96,
      rotateY: d > 0 ? 4 : -4,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
    },
    exit: (d: number) => ({
      x: d > 0 ? -60 : 60,
      opacity: 0,
      scale: 0.96,
      rotateY: d > 0 ? -4 : 4,
    }),
  };

  return (
    <div className={cn('relative group/carousel', className)}>
      {/* Main carousel area */}
      <div
        className={cn('relative', hasRealImage && 'cursor-pointer')}
        style={{ perspective: 1200 }}
        onClick={() => hasRealImage && setLightboxOpen(true)}
      >
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <MockupFrame
              item={currentItem}
              className={cn(
                'w-full flex justify-center',
                '[&_img]:max-h-[min(80vh,1040px)] [&_img]:w-auto [&_img]:max-w-full [&_img]:object-contain [&_img]:object-top',
              )}
            />
          </motion.div>
        </AnimatePresence>

        {/* Zoom hint on hover */}
        {hasRealImage && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300">
            <div className="w-10 h-10 rounded-full bg-white/80 shadow-lg flex items-center justify-center backdrop-blur-sm">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-600">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                <line x1="11" y1="8" x2="11" y2="14" />
                <line x1="8" y1="11" x2="14" y2="11" />
              </svg>
            </div>
          </div>
        )}

        {/* Prev / Next arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/70 shadow-md flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 hover:bg-white transition-all duration-200 z-10 backdrop-blur-sm"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-slate-600">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/70 shadow-md flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 hover:bg-white transition-all duration-200 z-10 backdrop-blur-sm"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-slate-600">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Caption */}
      {caption && (
        <AnimatePresence mode="wait">
          <motion.p
            key={current}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.3 }}
            className="text-center text-xs sm:text-[0.8125rem] text-slate-500/70 mt-2.5 font-medium leading-snug"
          >
            {caption}
          </motion.p>
        </AnimatePresence>
      )}

      {/* Navigation indicators */}
      {images.length > 1 && (
        <div className="flex items-center justify-center gap-1.5 mt-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="relative p-0.5 group"
            >
              <div
                className={cn(
                  'transition-all duration-400 rounded-full',
                  i === current
                    ? 'w-7 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 shadow-sm shadow-blue-500/30'
                    : 'w-1.5 h-1.5 bg-slate-300/50 group-hover:bg-slate-400/60 group-hover:scale-125',
                )}
              />
            </button>
          ))}
        </div>
      )}

      {/* Lightbox */}
      {lightboxOpen && (
        <ImageLightbox
          images={images}
          initialIndex={current}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </div>
  );
}
