import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, scaleIn } from '../hooks/useSlideAnimation';
import type { SlideData } from '../slides/types';
import { ImageLightbox } from '../components/ImageLightbox';

interface ScreenshotShowcaseLayoutProps {
  data: SlideData;
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const cardItem = {
  hidden: { opacity: 0, y: 28, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.25, 1, 0.5, 1] },
  },
};

export function ScreenshotShowcaseLayout({ data }: ScreenshotShowcaseLayoutProps) {
  const isDark = data.bg === 'deep' || data.bg === 'ocean';
  const gallery = data.gallery ?? [];
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = useCallback((i: number) => setLightboxIndex(i), []);

  // Convert gallery items to ImageItem format for the lightbox
  const lightboxImages = gallery.map(item => ({
    src: item.image,
    alt: item.caption ?? '',
    caption: item.caption,
  }));

  return (
    <div className="max-w-[76rem] mx-auto w-full px-4">
      {/* Header */}
      <div className="text-center mb-6 lg:mb-8">
        {data.subtitle && (
          <motion.p
            variants={fadeInUp}
            className={`text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-2.5 ${
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

      {/* Bento Grid */}
      <motion.div
        variants={staggerContainer}
        className="grid grid-cols-6 gap-3 lg:gap-4 auto-rows-auto"
      >
        {gallery.map((item, i) => {
          const isTopRow = i < 2;
          const colSpan = isTopRow ? 'col-span-6 sm:col-span-3' : 'col-span-6 sm:col-span-3 lg:col-span-2';

          return (
            <motion.div
              key={i}
              variants={cardItem}
              className={`group relative ${colSpan}`}
            >
              <div
                onClick={() => openLightbox(i)}
                className={`relative rounded-2xl overflow-hidden backdrop-blur-sm transition-all duration-400 hover:-translate-y-1 cursor-pointer ${
                  item.featured
                    ? 'bg-gradient-to-br from-blue-50/90 to-indigo-50/80 border-2 border-blue-400/40 shadow-[0_4px_32px_rgba(59,130,246,0.15),0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_48px_rgba(59,130,246,0.2),0_4px_16px_rgba(0,0,0,0.06)]'
                    : 'bg-white/80 border border-white/60 shadow-[0_4px_24px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(59,130,246,0.1),0_4px_16px_rgba(0,0,0,0.06)]'
                }`}
              >
                {/* Featured badge */}
                {item.featured && (
                  <div className="absolute top-3 right-3 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 shadow-lg shadow-blue-500/25">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" />
                    </svg>
                    <span className="text-[11px] font-bold text-white tracking-wide">核心亮点</span>
                  </div>
                )}

                {/* Screenshot */}
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.caption ?? ''}
                    loading="lazy"
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  {/* Zoom hint overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/[0.06] transition-colors duration-300 pointer-events-none">
                    <div className="w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-600">
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                        <line x1="11" y1="8" x2="11" y2="14" />
                        <line x1="8" y1="11" x2="14" y2="11" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Caption bar */}
                {item.caption && (
                  <div className={`px-4 py-3 flex items-center gap-2.5 ${item.featured ? 'bg-gradient-to-r from-blue-50/50 to-transparent' : ''}`}>
                    <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                      item.featured
                        ? 'bg-gradient-to-br from-blue-500 to-indigo-600'
                        : 'bg-gradient-to-br from-blue-400 to-indigo-500'
                    }`} />
                    <p className={`text-xs sm:text-[0.8125rem] font-medium leading-snug ${
                      item.featured
                        ? (isDark ? 'text-white/80' : 'text-blue-700/80')
                        : (isDark ? 'text-white/70' : 'text-slate-600')
                    }`}>
                      {item.caption}
                    </p>
                  </div>
                )}

                {/* Inner border for glass depth */}
                <div className={`absolute inset-0 rounded-2xl pointer-events-none ${
                  item.featured
                    ? 'ring-2 ring-inset ring-blue-300/30'
                    : 'ring-1 ring-inset ring-white/40'
                }`} />
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Body text */}
      {data.body && data.body.length > 0 && (
        <motion.div variants={fadeInUp} className="text-center mt-6">
          {data.body.map((p, i) => (
            <p
              key={i}
              className={`text-sm leading-relaxed ${
                isDark ? 'text-white/50' : 'text-slate-400'
              }`}
            >
              {p}
            </p>
          ))}
        </motion.div>
      )}

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <ImageLightbox
          images={lightboxImages}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </div>
  );
}
