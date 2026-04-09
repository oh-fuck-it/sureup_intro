import { motion } from 'framer-motion';
import { cn } from '../lib/cn';
import type { SlideData } from '../slides/types';

interface SlideNavProps {
  total: number;
  current: number;
  slides: SlideData[];
  onNavigate: (index: number) => void;
}

export function SlideNav({ total, current, slides, onNavigate }: SlideNavProps) {
  // For mobile: collapse to chapter-level dots
  const chapters: { index: number; label: string }[] = [];
  let lastChapter = '';
  slides.forEach((s, i) => {
    const ch = s.chapter ?? s.id;
    if (ch !== lastChapter) {
      chapters.push({ index: i, label: s.chapter ?? s.title ?? `Slide ${i + 1}` });
      lastChapter = ch;
    }
  });

  // Find current chapter index
  let currentChapterIdx = 0;
  for (let i = chapters.length - 1; i >= 0; i--) {
    if (current >= chapters[i]!.index) {
      currentChapterIdx = i;
      break;
    }
  }

  return (
    <>
      {/* Desktop: right side dots */}
      <nav
        className="fixed right-5 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center gap-[3px]"
        aria-label="Slide navigation"
      >
        {Array.from({ length: total }, (_, i) => {
          const isActive = i === current;
          const isChapterStart = i === 0 || slides[i]?.chapter !== slides[i - 1]?.chapter;

          return (
            <div key={i} className={cn(isChapterStart && i > 0 && 'mt-2')}>
              <button
                onClick={() => onNavigate(i)}
                className="group relative flex items-center justify-center w-7 h-4"
                aria-label={`Go to slide ${i + 1}`}
              >
                <motion.div
                  className={cn(
                    'rounded-full transition-colors duration-300',
                    isActive
                      ? 'bg-gradient-to-r from-blue-500 to-indigo-500'
                      : 'bg-slate-300/40 group-hover:bg-slate-400/60',
                  )}
                  animate={{
                    width: isActive ? 7 : 4,
                    height: isActive ? 7 : 4,
                  }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                />

                {/* Tooltip on hover */}
                <span
                  className={cn(
                    'absolute right-full mr-3 px-2.5 py-1',
                    'text-xs text-white/90 font-medium whitespace-nowrap',
                    'bg-slate-800/85 backdrop-blur-sm rounded-md',
                    'opacity-0 group-hover:opacity-100',
                    'transition-opacity duration-150',
                    'pointer-events-none',
                  )}
                >
                  {slides[i]?.title ?? slides[i]?.quote?.split('\n')[0]?.slice(0, 20) ?? `Slide ${i + 1}`}
                </span>
              </button>
            </div>
          );
        })}
      </nav>

      {/* Mobile: chapter-level dots (collapsed) */}
      <nav
        className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex md:hidden items-center gap-1.5 px-3 py-2 glass-subtle rounded-full"
        aria-label="Slide navigation"
      >
        {chapters.map((ch, i) => {
          const isActive = i === currentChapterIdx;
          return (
            <button
              key={ch.index}
              onClick={() => onNavigate(ch.index)}
              className="p-0.5"
              aria-label={ch.label}
            >
              <motion.div
                className={cn(
                  'rounded-full',
                  isActive ? 'bg-gradient-to-r from-blue-500 to-indigo-500' : 'bg-slate-300/50',
                )}
                animate={{
                  width: isActive ? 16 : 5,
                  height: 5,
                }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              />
            </button>
          );
        })}
      </nav>
    </>
  );
}
