import { motion } from 'framer-motion';
import { fadeInLeft, fadeInRight, fadeInUp, staggerItem } from '../hooks/useSlideAnimation';
import type { SlideData } from '../slides/types';
import { GlassPanel } from '../components/GlassPanel';
import { Check } from 'lucide-react';

interface CompareLayoutProps {
  data: SlideData;
}

export function CompareLayout({ data }: CompareLayoutProps) {
  const isDark = data.bg === 'deep' || data.bg === 'ocean';

  return (
    <div className="max-w-5xl mx-auto w-full">
      {data.title && (
        <motion.h2
          variants={fadeInUp}
          className={`text-2xl sm:text-3xl lg:text-[2.25rem] font-bold tracking-tight leading-tight text-center mb-3 ${
            isDark ? 'text-white' : 'text-slate-800'
          }`}
        >
          {data.title}
        </motion.h2>
      )}

      {data.subtitle && (
        <motion.p
          variants={fadeInUp}
          className={`text-sm sm:text-[0.9375rem] text-center mb-8 max-w-2xl mx-auto leading-relaxed ${
            isDark ? 'text-white/55' : 'text-slate-500/80'
          }`}
        >
          {data.subtitle}
        </motion.p>
      )}

      {data.compare && (
        <div className="grid sm:grid-cols-2 gap-4 lg:gap-5">
          {/* Left column */}
          <motion.div variants={fadeInLeft}>
            <GlassPanel
              variant={isDark ? 'subtle' : 'strong'}
              className="p-5 sm:p-6 h-full relative overflow-hidden"
            >
              {/* Top accent — vibrant */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-emerald-500 to-teal-500 opacity-80" />

              <span className="text-xs font-semibold tracking-[0.1em] uppercase text-emerald-500/80">
                {data.compare.left.label}
              </span>
              <h3
                className={`text-lg sm:text-xl font-bold mt-1 mb-5 ${
                  isDark ? 'text-white' : 'text-slate-800'
                }`}
              >
                {data.compare.left.title}
              </h3>

              <div className="space-y-3">
                {data.compare.left.items.map((item, i) => (
                  <motion.div
                    key={i}
                    variants={staggerItem}
                    className="flex items-start gap-2.5"
                  >
                    <Check className="w-4 h-4 mt-0.5 shrink-0 text-emerald-500/80" />
                    <span
                      className={`text-sm leading-relaxed ${
                        isDark ? 'text-white/80' : 'text-slate-700/90'
                      }`}
                    >
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </GlassPanel>
          </motion.div>

          {/* Right column */}
          <motion.div variants={fadeInRight}>
            <GlassPanel
              variant={isDark ? 'subtle' : 'strong'}
              className="p-5 sm:p-6 h-full relative overflow-hidden"
            >
              {/* Top accent — vibrant */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-500 to-indigo-500 opacity-80" />

              <span className="text-xs font-semibold tracking-[0.1em] uppercase text-blue-500/80">
                {data.compare.right.label}
              </span>
              <h3
                className={`text-lg sm:text-xl font-bold mt-1 mb-5 ${
                  isDark ? 'text-white' : 'text-slate-800'
                }`}
              >
                {data.compare.right.title}
              </h3>

              <div className="space-y-3">
                {data.compare.right.items.map((item, i) => (
                  <motion.div
                    key={i}
                    variants={staggerItem}
                    className="flex items-start gap-2.5"
                  >
                    <Check className="w-4 h-4 mt-0.5 shrink-0 text-emerald-500/80" />
                    <span
                      className={`text-sm leading-relaxed ${
                        isDark ? 'text-white/80' : 'text-slate-700/90'
                      }`}
                    >
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </GlassPanel>
          </motion.div>
        </div>
      )}
    </div>
  );
}
