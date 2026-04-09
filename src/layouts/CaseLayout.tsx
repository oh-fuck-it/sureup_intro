import { motion } from 'framer-motion';
import { scaleIn, fadeInUp } from '../hooks/useSlideAnimation';
import type { SlideData } from '../slides/types';
import { GlassPanel } from '../components/GlassPanel';
import { Quote } from 'lucide-react';

interface CaseLayoutProps {
  data: SlideData;
}

export function CaseLayout({ data }: CaseLayoutProps) {
  return (
    <div className="max-w-3xl lg:max-w-4xl mx-auto w-full flex flex-col items-center">
      {data.title && (
        <motion.div variants={fadeInUp} className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-bold tracking-tight text-slate-800 leading-tight">
            {data.title}
          </h2>
          {/* Decorative line */}
          <div className="mt-4 mx-auto w-10 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />
        </motion.div>
      )}

      <motion.div variants={scaleIn} className="w-full">
        <GlassPanel className="p-6 sm:p-8 lg:p-10 relative overflow-hidden">
          {/* Subtle top accent */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-300/30 to-transparent" />

          <Quote className="w-7 h-7 text-blue-300/50 mb-5" />

          <blockquote className="text-lg sm:text-xl lg:text-[1.375rem] font-medium text-slate-700/85 leading-[1.7] mb-6">
            {data.quote}
          </blockquote>

          {data.quoteAuthor && (
            <p className="text-sm sm:text-base text-slate-400/70 font-medium tracking-wide">
              —— {data.quoteAuthor}
            </p>
          )}
        </GlassPanel>
      </motion.div>

      {data.highlights && (
        <motion.div
          variants={fadeInUp}
          className="mt-7 grid grid-cols-2 sm:grid-cols-4 gap-3 w-full"
        >
          {data.highlights.map((h, i) => (
            <GlassPanel key={i} variant="subtle" className="p-4 text-center relative overflow-hidden group hover:shadow-md hover:shadow-blue-500/[0.03] transition-shadow duration-300">
              <div className="text-2xl sm:text-3xl font-bold text-gradient mb-1">
                {h.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-500/70">{h.label}</div>
            </GlassPanel>
          ))}
        </motion.div>
      )}
    </div>
  );
}
