import { motion } from 'framer-motion';
import { fadeInUp, staggerItem } from '../hooks/useSlideAnimation';
import type { SlideData } from '../slides/types';
import { cn } from '../lib/cn';

interface TableLayoutProps {
  data: SlideData;
}

export function TableLayout({ data }: TableLayoutProps) {
  return (
    <div className="max-w-5xl mx-auto w-full">
      {data.title && (
        <motion.h2
          variants={fadeInUp}
          className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight mb-2.5 leading-tight text-center bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 bg-clip-text text-transparent"
        >
          {data.title}
        </motion.h2>
      )}

      {data.subtitle && (
        <motion.p
          variants={fadeInUp}
          className="text-sm sm:text-[0.9375rem] text-slate-600 mb-7 max-w-2xl leading-relaxed text-center mx-auto whitespace-pre-line"
        >
          {data.subtitle}
        </motion.p>
      )}

      <motion.div
        variants={fadeInUp}
        className="overflow-x-auto -mx-5 px-5 sm:mx-0 sm:px-0"
      >
        <div className="glass-strong rounded-2xl overflow-hidden min-w-[640px] border border-slate-200">
          {data.tableHeaders && (
            <div
              className="grid bg-gradient-to-r from-slate-100 to-blue-50 border-b border-slate-200"
              style={{
                gridTemplateColumns: `repeat(${data.tableHeaders.length}, minmax(0, 1fr))`,
              }}
            >
              {data.tableHeaders.map((h, i) => (
                <div
                  key={i}
                  className={cn(
                    'px-5 py-3.5 text-[0.6875rem] font-bold tracking-[0.08em] uppercase',
                    i === 0 ? 'text-slate-800' : 'text-slate-500',
                  )}
                >
                  {h}
                </div>
              ))}
            </div>
          )}

          {data.tableRows?.map((row, ri) => (
            <motion.div
              key={ri}
              variants={staggerItem}
              className={cn(
                'grid border-b border-slate-200/80 last:border-b-0',
                'hover:bg-blue-50/40 transition-colors duration-200',
                ri % 2 === 1 && 'bg-slate-50/60',
              )}
              style={{
                gridTemplateColumns: `repeat(${row.length}, minmax(0, 1fr))`,
              }}
            >
              {row.map((cell, ci) => (
                <div
                  key={ci}
                  className={cn(
                    'px-5 py-3 text-xs sm:text-[0.8125rem] leading-relaxed',
                    ci === 0
                      ? 'font-semibold text-slate-900'
                      : 'text-slate-700',
                  )}
                >
                  {cell}
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {data.body && (
        <motion.p
          variants={fadeInUp}
          className="mt-5 text-sm text-slate-500 font-medium text-center"
        >
          {data.body[0]}
        </motion.p>
      )}
    </div>
  );
}
