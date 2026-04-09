import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { fadeInUp, scaleIn } from '../hooks/useSlideAnimation';
import type { SlideData } from '../slides/types';

interface CoverLayoutProps {
  data: SlideData;
}

export function CoverLayout({ data }: CoverLayoutProps) {
  return (
    <div className="relative w-full h-full min-h-[100dvh] flex flex-col items-center justify-center">
      {/* Hero image — centered, fills the page */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <motion.img
          variants={fadeInUp}
          src="/images/cover-hero.png"
          alt="稳了平台三端展示"
          className="w-full max-h-full object-contain"
        />
        {/* Left feather — softer multi-stop */}
        <div className="absolute inset-y-0 left-0 w-[38%] bg-gradient-to-r from-white via-white/70 via-60% to-transparent pointer-events-none" />
        {/* Right feather */}
        <div className="absolute inset-y-0 right-0 w-[38%] bg-gradient-to-l from-white via-white/70 via-60% to-transparent pointer-events-none" />
        {/* Top vignette */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/60 to-transparent pointer-events-none" />
        {/* Bottom vignette */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/50 to-transparent pointer-events-none" />
      </div>

      {/* Top: Logo + Brand + Subtitle — floats above the image */}
      <motion.div
        variants={scaleIn}
        className="relative z-10 flex flex-col items-center pt-10 sm:pt-14 lg:pt-16"
      >
        <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
          <img
            src="/images/logo-platform.png"
            alt="SureUp"
            className="w-11 h-11 sm:w-14 sm:h-14 lg:w-[4.5rem] lg:h-[4.5rem] drop-shadow-md"
          />
          <h1 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight bg-gradient-to-r from-emerald-500 via-teal-500 to-blue-500 bg-clip-text text-transparent drop-shadow-sm">
            {data.title}
          </h1>
        </div>
        <p className="text-sm sm:text-lg lg:text-xl text-slate-400/80 font-medium tracking-[0.35em]">
          {data.subtitle}
        </p>
        {/* Decorative line */}
        <div className="mt-5 w-12 h-px bg-gradient-to-r from-transparent via-slate-300/60 to-transparent" />
      </motion.div>

      {/* Spacer to push bottom content down */}
      <div className="flex-1" />

      {/* Bottom: Company info + scroll hint */}
      <motion.div
        variants={fadeInUp}
        className="relative z-10 flex flex-col items-center gap-3 pb-6 sm:pb-10"
      >
        <div className="flex items-center gap-2.5 text-slate-400">
          <img
            src="/images/logo-company.png"
            alt="DelveTech"
            className="h-4 sm:h-5 w-auto opacity-30"
          />
          <span className="text-xs sm:text-sm opacity-25">|</span>
          <span className="text-xs sm:text-sm font-medium opacity-30 tracking-wider">北京探渊科技</span>
        </div>
        <ChevronDown className="w-4 h-4 text-slate-300/40 animate-bounce-slow" />
      </motion.div>
    </div>
  );
}
