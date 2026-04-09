import { motion } from 'framer-motion';
import { scaleIn, fadeInUp } from '../hooks/useSlideAnimation';
import type { SlideData } from '../slides/types';

interface ContrastLayoutProps {
  data: SlideData;
}

export function ContrastLayout({ data }: ContrastLayoutProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center max-w-5xl mx-auto w-full gap-8 sm:gap-10 -mt-8">
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

      {/* ── Platform screenshot with elegant frame ── */}
      {data.image && (
        <motion.div
          variants={fadeInUp}
          className="w-full max-w-3xl"
        >
          <div className="relative group">
            {/* Glow behind the card */}
            <div className="absolute -inset-3 bg-gradient-to-b from-blue-400/10 via-cyan-300/10 to-emerald-300/10 rounded-2xl blur-xl opacity-70" />

            {/* Card */}
            <div className="relative rounded-xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.12)] ring-1 ring-black/[0.04]">
              {/* macOS title bar */}
              <div className="flex items-center gap-[6px] px-3.5 py-2.5 bg-gradient-to-b from-[#f6f6f6] to-[#ececec] border-b border-black/[0.06]">
                <span className="w-[10px] h-[10px] rounded-full bg-[#FF5F57] shadow-inner" />
                <span className="w-[10px] h-[10px] rounded-full bg-[#FEBC2E] shadow-inner" />
                <span className="w-[10px] h-[10px] rounded-full bg-[#28C840] shadow-inner" />
                <span className="flex-1 text-center text-[10px] text-gray-400 font-medium -ml-8">
                  SureUp — 数据驾驶舱
                </span>
              </div>
              <img
                src={data.image}
                alt={data.imageAlt || ''}
                className="w-full block"
              />
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
