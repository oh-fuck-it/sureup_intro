import { motion } from 'framer-motion';
import { scaleIn, fadeInUp } from '../hooks/useSlideAnimation';
import { InfiniteImageWall } from '../components/InfiniteImageWall';
import type { SlideData } from '../slides/types';

interface ContrastLayoutProps {
  data: SlideData;
}

export function ContrastLayout({ data }: ContrastLayoutProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center w-full gap-4 sm:gap-5">
      {/* ── Tagline label ── */}
      {data.subtitle && (
        <motion.p
          variants={fadeInUp}
          className="text-[10px] sm:text-xs font-semibold tracking-[0.35em] uppercase text-blue-400/50"
        >
          {data.subtitle}
        </motion.p>
      )}

      {/* ── Hero headline ── */}
      {data.title && (
        <motion.h2
          variants={scaleIn}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight bg-gradient-to-r from-slate-800 via-blue-700 to-teal-600 bg-clip-text text-transparent"
        >
          {data.title}
        </motion.h2>
      )}

      {/* ── Subtle decorative line ── */}
      <motion.div
        variants={scaleIn}
        className="w-16 h-px bg-gradient-to-r from-transparent via-blue-300/50 to-transparent"
      />

      {/* ── Infinite scrolling image wall ── */}
      <motion.div
        variants={fadeInUp}
        className="w-full"
      >
        <InfiniteImageWall />
      </motion.div>
    </div>
  );
}
