import { motion } from 'framer-motion';
import type { SlideData, SlideBg } from '../slides/types';
import { useSlideAnimation, staggerContainer } from '../hooks/useSlideAnimation';
import { AmbientOrbs } from './AmbientOrbs';
import { cn } from '../lib/cn';

interface SlideProps {
  data: SlideData;
  index: number;
  children: React.ReactNode;
}

const bgClass: Record<SlideBg, string> = {
  default: 'slide-bg-default',
  white: 'bg-white',
  warm: 'slide-bg-warm',
  deep: 'slide-bg-deep',
  mint: 'slide-bg-mint',
  lavender: 'slide-bg-lavender',
  peach: 'slide-bg-peach',
  ocean: 'slide-bg-ocean',
  sunset: 'slide-bg-sunset',
  frost: 'slide-bg-frost',
};

export function Slide({ data, index, children }: SlideProps) {
  const { ref, isInView } = useSlideAnimation(0.25);

  const bg = data.bg ?? 'default';
  const isDark = bg === 'deep' || bg === 'ocean';

  return (
    <section
      className={cn('slide', bgClass[bg])}
      data-slide-index={index}
      aria-label={data.title ?? `Slide ${index + 1}`}
    >
      {data.orbs && <AmbientOrbs orbs={data.orbs} visible={isInView} />}

      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className={cn(
          'relative z-10 h-full min-h-[100dvh]',
          'flex flex-col justify-center',
          (data.layout === 'cover' || data.layout === 'contrast') ? 'px-0' : 'px-5 sm:px-8 lg:px-16 xl:px-24',
          (data.layout === 'cover' || data.layout === 'contrast') ? 'py-0' : 'py-12 sm:py-16',
          isDark && 'text-white',
        )}
      >
        {children}
      </motion.div>
    </section>
  );
}
