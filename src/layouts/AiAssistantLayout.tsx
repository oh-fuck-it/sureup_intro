import { useState, useCallback, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, fadeInLeft, scaleIn } from '../hooks/useSlideAnimation';
import type { SlideData } from '../slides/types';
import { ImageLightbox } from '../components/ImageLightbox';

interface AiAssistantLayoutProps {
  data: SlideData;
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const cardItem = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: [0.25, 1, 0.5, 1] as const },
  },
};

export function AiAssistantLayout({ data }: AiAssistantLayoutProps) {
  const isDark = data.bg === 'deep' || data.bg === 'ocean';
  const gallery = data.gallery ?? [];
  const phoneImg = data.images?.find(i => i.frame === 'mobile');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = useCallback((i: number) => setLightboxIndex(i), []);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Duplicate gallery for seamless infinite loop
  const loopGallery = [...gallery, ...gallery];

  // Auto-scroll the gallery — infinite seamless loop
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let raf: number;
    let paused = false;
    let pauseTimer: ReturnType<typeof setTimeout>;
    const speed = 0.5; // px per frame

    const step = () => {
      if (!paused && el) {
        el.scrollLeft += speed;
        // When we've scrolled past the first set, jump back seamlessly
        const halfScroll = el.scrollWidth / 2;
        if (el.scrollLeft >= halfScroll) {
          el.scrollLeft -= halfScroll;
        }
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);

    const pause = () => {
      paused = true;
      clearTimeout(pauseTimer);
      pauseTimer = setTimeout(() => { paused = false; }, 2000);
    };

    el.addEventListener('pointerdown', pause);
    el.addEventListener('wheel', pause);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(pauseTimer);
      el.removeEventListener('pointerdown', pause);
      el.removeEventListener('wheel', pause);
    };
  }, []);

  const lightboxImages = gallery.map(item => ({
    src: item.image,
    alt: item.caption ?? '',
    caption: item.caption,
  }));

  return (
    <div className="max-w-[90rem] mx-auto w-full px-4">
      {/* Header — compact */}
      <div className="text-center mb-4 lg:mb-5">
        {data.subtitle && (
          <motion.p
            variants={fadeInUp}
            className={`text-xs font-semibold tracking-[0.2em] uppercase mb-1.5 ${
              isDark ? 'text-blue-300/60' : 'text-blue-500/60'
            }`}
          >
            {data.subtitle}
          </motion.p>
        )}
        {data.title && (
          <motion.h2
            variants={scaleIn}
            className={`text-2xl sm:text-3xl lg:text-[2.25rem] font-bold tracking-tight leading-[1.15] ${
              isDark ? 'text-white' : 'text-slate-800'
            }`}
          >
            {data.title}
          </motion.h2>
        )}
        {data.body && data.body.length > 0 && (
          <motion.p
            variants={fadeInUp}
            className={`mt-2 text-xs sm:text-sm ${isDark ? 'text-white/50' : 'text-slate-400'}`}
          >
            {data.body[0]}
          </motion.p>
        )}
      </div>

      {/* Phone + horizontal scrolling gallery */}
      <div className="flex items-center gap-4 lg:gap-6">
        {/* Phone */}
        {phoneImg && (
          <motion.div
            variants={fadeInLeft}
            className="shrink-0 w-[155px] lg:w-[190px] xl:w-[210px]"
          >
            <div className="bg-gradient-to-b from-slate-700 to-slate-900 rounded-[2rem] p-[3px] shadow-2xl shadow-slate-900/30 ring-1 ring-white/[0.08]">
              <div className="relative rounded-[1.85rem] overflow-hidden bg-white">
                {/* Dynamic Island */}
                <div className="absolute top-[5px] left-1/2 -translate-x-1/2 w-[28%] h-[12px] bg-black rounded-full z-20" />
                {phoneImg.src ? (
                  <img src={phoneImg.src} alt={phoneImg.alt} className="w-full h-auto block" loading="lazy" />
                ) : (
                  <div className="aspect-[9/19] bg-gradient-to-br from-slate-50 to-blue-50/30 flex items-center justify-center">
                    <p className="text-[9px] text-slate-400 px-3 text-center">{phoneImg.alt}</p>
                  </div>
                )}
              </div>
            </div>
            <p className={`text-center text-[10px] mt-1.5 font-medium ${isDark ? 'text-white/35' : 'text-slate-400/70'}`}>
              手机端同步可用
            </p>
          </motion.div>
        )}

        {/* Horizontal scrolling gallery */}
        <div
          ref={scrollRef}
          className="flex-1 min-w-0 overflow-x-auto overflow-y-hidden scrollbar-hide"
        >
          <motion.div variants={staggerContainer} className="flex gap-3 pb-2 w-max">
            {loopGallery.map((item, i) => (
              <motion.div
                key={i}
                variants={cardItem}
                className="group shrink-0 w-[340px] lg:w-[400px] xl:w-[440px]"
              >
                <div
                  onClick={() => openLightbox(i % gallery.length)}
                  className="relative rounded-xl overflow-hidden bg-white/80 backdrop-blur-sm border border-white/60 shadow-[0_3px_20px_rgba(0,0,0,0.05),0_1px_2px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_10px_36px_rgba(59,130,246,0.1),0_3px_12px_rgba(0,0,0,0.05)] hover:-translate-y-0.5 cursor-pointer"
                >
                  {/* Screenshot */}
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.caption ?? ''}
                      loading="lazy"
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                    {/* Zoom hint */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/[0.05] transition-colors duration-300 pointer-events-none">
                      <div className="w-8 h-8 rounded-full bg-white/90 shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-600">
                          <circle cx="11" cy="11" r="8" />
                          <line x1="21" y1="21" x2="16.65" y2="16.65" />
                          <line x1="11" y1="8" x2="11" y2="14" />
                          <line x1="8" y1="11" x2="14" y2="11" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Caption — single line, compact */}
                  {item.caption && (
                    <div className="px-2.5 py-2 flex items-center gap-1.5">
                      <div className="w-1 h-1 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 shrink-0" />
                      <p className={`text-[10px] sm:text-[11px] font-medium leading-tight truncate ${
                        isDark ? 'text-white/60' : 'text-slate-500'
                      }`}>
                        {item.caption}
                      </p>
                    </div>
                  )}

                  <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/40 pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Lightbox */}
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
