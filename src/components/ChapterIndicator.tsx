import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/cn';

interface ChapterIndicatorProps {
  chapter?: string;
  current: number;
  total: number;
}

export function ChapterIndicator({ chapter, current, total }: ChapterIndicatorProps) {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      {/* Progress bar — thinner, more refined */}
      <div className="h-[1.5px] bg-black/[0.04]">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-400 via-indigo-500 to-violet-500"
          initial={{ width: 0 }}
          animate={{ width: `${((current + 1) / total) * 100}%` }}
          transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
        />
      </div>

      {/* Header: logo left, page number right */}
      <div className="flex justify-between items-center px-5 sm:px-8 pt-3.5">
        <div className="flex items-center gap-3 pointer-events-auto">
          <div className="flex items-center gap-1.5">
            <img src="/images/logo-platform.png" alt="Logo" className="h-4 w-4 object-contain opacity-60" />
            <span className="text-[0.75rem] font-medium text-slate-400/70 tracking-wide">SureUp</span>
          </div>
          <AnimatePresence mode="wait">
            {chapter && (
              <motion.span
                key={chapter}
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                transition={{ duration: 0.25 }}
                className={cn(
                  'text-xs sm:text-[0.8125rem] font-medium tracking-wide',
                  'text-slate-400/60',
                  'before:content-["|"] before:mr-3 before:text-slate-200/50 before:text-[0.6875rem]',
                )}
              >
                {chapter}
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        <span className="text-[0.6875rem] text-slate-300/70 tabular-nums pointer-events-auto tracking-wider">
          {current + 1} / {total}
        </span>
      </div>
    </div>
  );
}
