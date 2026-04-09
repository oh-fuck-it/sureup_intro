import { motion } from 'framer-motion';
import { fadeInUp, scaleIn } from '../hooks/useSlideAnimation';
import type { SlideData } from '../slides/types';

interface FeatureCardsLayoutProps {
  data: SlideData;
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 36, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] },
  },
};

const cardStyles = [
  {
    gradient: 'from-amber-400 via-orange-400 to-rose-400',
    iconBg: 'bg-gradient-to-br from-amber-100 to-orange-100',
    iconText: 'text-amber-600',
    accentLine: 'from-amber-400/60 to-rose-400/30',
    shadow: 'hover:shadow-amber-500/[0.08]',
  },
  {
    gradient: 'from-blue-400 via-indigo-400 to-violet-400',
    iconBg: 'bg-gradient-to-br from-blue-100 to-indigo-100',
    iconText: 'text-blue-600',
    accentLine: 'from-blue-400/60 to-violet-400/30',
    shadow: 'hover:shadow-blue-500/[0.08]',
  },
  {
    gradient: 'from-emerald-400 via-teal-400 to-cyan-400',
    iconBg: 'bg-gradient-to-br from-emerald-100 to-teal-100',
    iconText: 'text-emerald-600',
    accentLine: 'from-emerald-400/60 to-cyan-400/30',
    shadow: 'hover:shadow-emerald-500/[0.08]',
  },
];

export function FeatureCardsLayout({ data }: FeatureCardsLayoutProps) {
  const isDark = data.bg === 'deep' || data.bg === 'ocean';
  const features = data.features ?? [];

  return (
    <div className="max-w-5xl mx-auto w-full px-4">
      {/* Header */}
      <div className="text-center mb-10 lg:mb-12">
        {data.subtitle && (
          <motion.p
            variants={fadeInUp}
            className={`text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-3 ${
              isDark ? 'text-violet-300/60' : 'text-violet-500/60'
            }`}
          >
            {data.subtitle}
          </motion.p>
        )}
        {data.title && (
          <motion.h2
            variants={scaleIn}
            className={`text-2xl sm:text-3xl lg:text-[2.5rem] font-bold tracking-tight leading-[1.15] ${
              isDark ? 'text-white' : 'text-slate-800'
            }`}
          >
            {data.title}
          </motion.h2>
        )}
      </div>

      {/* Cards */}
      <motion.div
        variants={staggerContainer}
        className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-5"
      >
        {features.map((f, i) => {
          const style = cardStyles[i % cardStyles.length];
          return (
            <motion.div
              key={i}
              variants={cardVariant}
              className="group relative"
            >
              <div
                className={`relative h-full rounded-2xl overflow-hidden bg-white/85 backdrop-blur-xl border border-white/60 shadow-[0_4px_24px_rgba(0,0,0,0.05),0_1px_3px_rgba(0,0,0,0.03)] transition-all duration-400 hover:shadow-xl ${style.shadow} hover:-translate-y-1.5 p-6 lg:p-7`}
              >
                {/* Top gradient accent */}
                <div className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${style.gradient} opacity-80`} />

                {/* Icon */}
                <div className={`w-12 h-12 rounded-2xl ${style.iconBg} flex items-center justify-center text-2xl mb-5 shadow-sm`}>
                  {f.icon}
                </div>

                {/* Title */}
                <h3
                  className={`text-lg sm:text-xl font-bold mb-3 ${
                    isDark ? 'text-white/90' : 'text-slate-800'
                  }`}
                >
                  {f.title}
                </h3>

                {/* Description */}
                <p
                  className={`text-sm leading-[1.8] ${
                    isDark ? 'text-white/55' : 'text-slate-500/80'
                  }`}
                >
                  {f.description}
                </p>

                {/* Decorative corner gradient */}
                <div className={`absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-br ${style.gradient} opacity-[0.04] group-hover:opacity-[0.08] transition-opacity duration-500`} />

                {/* Inner border */}
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/40 pointer-events-none" />
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
