import { motion } from 'framer-motion';
import { fadeInUp, scaleIn, staggerItem } from '../hooks/useSlideAnimation';
import type { SlideData } from '../slides/types';
import { GlassPanel } from '../components/GlassPanel';

interface StatsLayoutProps {
  data: SlideData;
}

const accentGradients = [
  'from-blue-500 to-indigo-600',
  'from-emerald-500 to-teal-600',
  'from-violet-500 to-purple-600',
  'from-amber-500 to-orange-600',
];

export function StatsLayout({ data }: StatsLayoutProps) {
  const isDark = data.bg === 'deep' || data.bg === 'ocean';
  const count = data.highlights?.length ?? 0;
  const gridCols =
    count <= 2
      ? 'sm:grid-cols-2'
      : count === 3
        ? 'sm:grid-cols-3'
        : 'sm:grid-cols-2 lg:grid-cols-4';

  return (
    <div className="max-w-5xl mx-auto w-full">
      <div className="text-center mb-10">
        {data.subtitle && (
          <motion.p
            variants={fadeInUp}
            className={`text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-4 ${
              isDark ? 'text-blue-300/60' : 'text-blue-500/60'
            }`}
          >
            {data.subtitle}
          </motion.p>
        )}

        {data.title && (
          <motion.h2
            variants={scaleIn}
            className={`text-2xl sm:text-3xl lg:text-[2.25rem] font-bold tracking-tight leading-tight ${
              isDark ? 'text-white' : 'text-slate-800'
            }`}
          >
            {data.title}
          </motion.h2>
        )}
      </div>

      {data.highlights && (
        <motion.div
          variants={fadeInUp}
          className={`grid gap-4 lg:gap-5 ${gridCols}`}
        >
          {data.highlights.map((h, i) => (
            <motion.div key={i} variants={staggerItem}>
              <GlassPanel
                variant={isDark ? 'subtle' : 'strong'}
                className="p-6 sm:p-7 text-center relative overflow-hidden"
              >
                {/* Accent bar at bottom */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r ${accentGradients[i % accentGradients.length]} opacity-60`}
                />

                {h.value && (
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gradient mb-2 tracking-tight">
                    {h.value}
                  </div>
                )}
                <div
                  className={`text-sm font-semibold mb-1 ${
                    isDark ? 'text-white/80' : 'text-slate-700'
                  }`}
                >
                  {h.label}
                </div>
                {h.description && (
                  <div
                    className={`text-xs leading-relaxed ${
                      isDark ? 'text-white/45' : 'text-slate-500/70'
                    }`}
                  >
                    {h.description}
                  </div>
                )}
              </GlassPanel>
            </motion.div>
          ))}
        </motion.div>
      )}

      {data.body && data.body.length > 0 && (
        <div className="mt-6 space-y-1.5">
          {data.body.map((p, i) => (
            <motion.p
              key={i}
              variants={fadeInUp}
              className={`text-sm text-center font-medium ${
                isDark ? 'text-white/40' : 'text-slate-400'
              }`}
            >
              {p}
            </motion.p>
          ))}
        </div>
      )}
    </div>
  );
}
