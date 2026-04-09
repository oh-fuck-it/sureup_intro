import { motion } from 'framer-motion';
import { fadeInUp, staggerItem } from '../hooks/useSlideAnimation';
import type { SlideData } from '../slides/types';

interface GalleryLayoutProps {
  data: SlideData;
}

const rotations = [-2.5, 1.8, -1.2, 2.4, -1.8, 1.5];

export function GalleryLayout({ data }: GalleryLayoutProps) {
  return (
    <div className="max-w-6xl mx-auto w-full">
      {data.title && (
        <motion.h2
          variants={fadeInUp}
          className="text-2xl sm:text-3xl lg:text-[2.25rem] font-bold tracking-tight text-slate-800 mb-2.5 leading-tight text-center"
        >
          {data.title}
        </motion.h2>
      )}

      {data.subtitle && (
        <motion.p
          variants={fadeInUp}
          className="text-sm sm:text-[0.9375rem] text-slate-500/80 mb-8 max-w-2xl mx-auto text-center leading-relaxed"
        >
          {data.subtitle}
        </motion.p>
      )}

      {data.gallery && (
        <motion.div
          variants={fadeInUp}
          className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5"
        >
          {data.gallery.map((item, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className="group relative"
              style={{
                transform: `rotate(${rotations[i % rotations.length]}deg)`,
              }}
              whileHover={{
                rotate: 0,
                scale: 1.04,
                zIndex: 10,
                transition: { duration: 0.3, ease: 'easeOut' },
              }}
            >
              <div className="relative rounded-xl overflow-hidden bg-white shadow-[0_4px_24px_rgba(0,0,0,0.08)] ring-1 ring-black/[0.04]">
                <img
                  src={item.image}
                  alt={item.caption ?? ''}
                  loading="lazy"
                  className="w-full h-auto object-cover"
                />
                {/* Paper edge effect */}
                <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-black/[0.06] pointer-events-none" />
              </div>

              {item.caption && (
                <p className="mt-2.5 text-xs sm:text-sm text-slate-500/70 text-center font-medium leading-snug">
                  {item.caption}
                </p>
              )}
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
}
