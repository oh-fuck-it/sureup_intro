import { motion } from 'framer-motion';
import { scaleIn } from '../hooks/useSlideAnimation';
import type { SlideData } from '../slides/types';

interface BreathLayoutProps {
  data: SlideData;
}

export function BreathLayout({ data }: BreathLayoutProps) {
  const isDark = data.bg === 'deep' || data.bg === 'ocean';

  return (
    <div className="flex flex-col items-center justify-center text-center max-w-3xl lg:max-w-4xl mx-auto w-full h-full flex-1 -mt-28">
      {data.subtitle && (
        <motion.p
          variants={scaleIn}
          className={
            isDark
              ? 'text-xs sm:text-sm font-semibold text-blue-300/60 tracking-[0.25em] uppercase mb-6'
              : 'text-xs sm:text-sm font-semibold text-blue-500/50 tracking-[0.25em] uppercase mb-6'
          }
        >
          {data.subtitle}
        </motion.p>
      )}

      {/* Decorative line above quote */}
      <motion.div
        variants={scaleIn}
        className={`w-10 h-px mb-8 ${isDark ? 'bg-white/15' : 'bg-gradient-to-r from-transparent via-slate-300/50 to-transparent'}`}
        style={{ width: '3rem' }}
      />

      <motion.blockquote
        variants={scaleIn}
        className={
          isDark
            ? 'flex flex-col gap-4 sm:gap-6 text-2xl sm:text-4xl lg:text-[3.25rem] font-bold tracking-tight text-white/90'
            : 'flex flex-col gap-4 sm:gap-6 text-2xl sm:text-4xl lg:text-[3.25rem] font-bold tracking-tight'
        }
      >
        {data.quote?.split('\n').map((line, i, arr) => {
          const colorClass = isDark
            ? ''
            : i === 0
              ? 'text-teal-700'
              : i === arr.length - 1
                ? 'text-slate-400 text-xl sm:text-2xl lg:text-3xl'
                : 'text-slate-600';
          return (
            <span key={i} className={colorClass}>
              {line}
            </span>
          );
        })}
      </motion.blockquote>

      {data.quoteAuthor && (
        <motion.p
          variants={scaleIn}
          className={
            isDark
              ? 'mt-10 text-sm sm:text-base text-blue-200/40 font-light tracking-wider'
              : 'mt-10 text-sm sm:text-base text-slate-400/60 font-light tracking-wider'
          }
        >
          —— {data.quoteAuthor}
        </motion.p>
      )}
    </div>
  );
}
