import { motion } from 'framer-motion';
import { fadeInUp, scaleIn, staggerItem } from '../hooks/useSlideAnimation';
import type { SlideData } from '../slides/types';
import { GlassPanel } from '../components/GlassPanel';
import { SlideVisual } from '../components/SlideVisual';

interface FeatureGridLayoutProps {
  data: SlideData;
}

const iconGradients = [
  'from-blue-50 to-indigo-100 text-blue-600',
  'from-emerald-50 to-teal-100 text-emerald-600',
  'from-violet-50 to-purple-100 text-violet-600',
  'from-amber-50 to-orange-100 text-amber-600',
  'from-rose-50 to-pink-100 text-rose-600',
  'from-cyan-50 to-sky-100 text-cyan-600',
];

export function FeatureGridLayout({ data }: FeatureGridLayoutProps) {
  const isDark = data.bg === 'deep' || data.bg === 'ocean';
  const count = data.features?.length ?? 0;
  const hasImages = data.images && data.images.length > 0;
  const imgCount = data.images?.length ?? 0;
  const hasGroupedDisplay = hasImages && data.imageDisplay && data.imageDisplay !== 'single' && data.imageDisplay !== 'grid';

  // Unified layout: features + images mixed in one grid
  // Images occupy grid cells alongside features
  const gridCols = count <= 4 ? 'sm:grid-cols-2' : 'sm:grid-cols-2 lg:grid-cols-3';

  return (
    <div className="max-w-5xl mx-auto w-full">
      <div className="text-center mb-8">
        {data.subtitle && (
          <motion.p
            variants={fadeInUp}
            className={`text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-3 ${
              isDark ? 'text-blue-300/60' : 'text-blue-500/60'
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

      {/* Mixed grid: features + images together */}
      <motion.div
        variants={fadeInUp}
        className={`grid gap-3 lg:gap-3.5 ${gridCols}`}
      >
        {/* Feature cards */}
        {data.features?.map((f, i) => (
          <motion.div key={`f-${i}`} variants={staggerItem}>
            <GlassPanel
              variant={isDark ? 'subtle' : 'default'}
              className="p-4 sm:p-5 h-full group hover:shadow-lg hover:shadow-blue-500/[0.04] transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="flex items-start gap-3">
                {f.icon && (
                  <div
                    className={`w-9 h-9 rounded-xl bg-gradient-to-br ${iconGradients[i % iconGradients.length]} flex items-center justify-center text-base shrink-0`}
                  >
                    {f.icon}
                  </div>
                )}
                <div className="min-w-0">
                  <h3
                    className={`text-sm sm:text-[0.9375rem] font-semibold mb-1 ${
                      isDark ? 'text-white/90' : 'text-slate-800'
                    }`}
                  >
                    {f.title}
                  </h3>
                  <p
                    className={`text-xs leading-relaxed ${
                      isDark ? 'text-white/50' : 'text-slate-500/75'
                    }`}
                  >
                    {f.description}
                  </p>
                </div>
              </div>
            </GlassPanel>
          </motion.div>
        ))}

        {/* Image cards — inline grid cells when no grouped display mode */}
        {hasImages && !hasGroupedDisplay && data.images!.map((img, i) => (
          <motion.div
            key={`img-${i}`}
            variants={staggerItem}
            className={imgCount === 1 && count % 2 === 0 ? 'sm:col-span-2' : ''}
          >
            <SlideVisual
              images={[img]}
              imageDisplay="single"
              className="h-full"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Grouped image display — rendered below the feature grid */}
      {hasImages && hasGroupedDisplay && (
        <motion.div variants={staggerItem} className="mt-6 flex justify-center">
          <SlideVisual
            images={data.images}
            imageDisplay={data.imageDisplay}
            className="max-h-[32vh]"
          />
        </motion.div>
      )}
    </div>
  );
}
