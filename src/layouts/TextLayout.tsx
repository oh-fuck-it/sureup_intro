import { motion } from 'framer-motion';
import { fadeInLeft, fadeInUp, staggerItem } from '../hooks/useSlideAnimation';
import type { SlideData } from '../slides/types';
import { GlassPanel } from '../components/GlassPanel';

interface TextLayoutProps {
  data: SlideData;
}

export function TextLayout({ data }: TextLayoutProps) {
  return (
    <div className="max-w-5xl mx-auto w-full">
      <div className="grid lg:grid-cols-5 gap-6 lg:gap-10 items-start">
        {/* Left: title */}
        <motion.div variants={fadeInLeft} className="lg:col-span-2">
          <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-bold tracking-tight text-slate-800 leading-tight lg:sticky lg:top-24">
            {data.title}
          </h2>
          {data.subtitle && (
            <p className="mt-3 text-sm sm:text-[0.9375rem] text-slate-500/70 leading-relaxed">{data.subtitle}</p>
          )}
          {/* Decorative accent */}
          <div className="mt-5 w-8 h-[2px] rounded-full bg-gradient-to-r from-blue-400/50 to-violet-400/30 hidden lg:block" />
        </motion.div>

        {/* Right: content cards */}
        <motion.div variants={fadeInUp} className="lg:col-span-3 space-y-3.5">
          {data.body?.map((paragraph, i) => {
            const isQuote = paragraph.startsWith('>');
            const text = isQuote ? paragraph.slice(1).trim() : paragraph;

            if (isQuote) {
              return (
                <motion.div key={i} variants={staggerItem}>
                  <GlassPanel className="p-4 sm:p-5 border-l-2 border-blue-400/60">
                    <p className="text-sm sm:text-[0.9375rem] text-slate-600/85 leading-[1.75] italic">
                      {text}
                    </p>
                  </GlassPanel>
                </motion.div>
              );
            }

            const isBold = paragraph.startsWith('**');
            if (isBold) {
              return (
                <motion.p
                  key={i}
                  variants={staggerItem}
                  className="text-sm sm:text-[0.9375rem] font-semibold text-slate-800 pt-1"
                >
                  {paragraph.replace(/\*\*/g, '')}
                </motion.p>
              );
            }

            return (
              <motion.p
                key={i}
                variants={staggerItem}
                className="text-sm sm:text-[0.9375rem] text-slate-600/85 leading-[1.75]"
              >
                {text}
              </motion.p>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
