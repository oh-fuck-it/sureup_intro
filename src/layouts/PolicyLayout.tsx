import { motion } from 'framer-motion';
import { fadeInLeft, fadeInUp, fadeInRight, staggerItem } from '../hooks/useSlideAnimation';
import type { SlideData } from '../slides/types';

interface PolicyLayoutProps {
  data: SlideData;
}

/*
 * Collage positions — all relative to the RIGHT panel only (60% width).
 * Images are contained within the right zone so they never overlap the text.
 */
const docStyles: Array<{
  width: string;
  top: string;
  left: string;
  rotate: number;
  z: number;
  delay: number;
}> = [
  // Top-left of right panel
  { width: '42%', top: '0%',   left: '-2%', rotate: -2.5,  z: 2, delay: 0.05 },
  // Top-right — anchor piece
  { width: '44%', top: '0%',   left: '54%', rotate: 2.2,   z: 3, delay: 0.12 },
  // Top-center — NEW, fills the gap between top two
  { width: '40%', top: '5%',   left: '26%', rotate: 0.8,   z: 6, delay: 0.20 },
  // Mid-left
  { width: '40%', top: '36%',  left: '2%',  rotate: 2.8,   z: 1, delay: 0.28 },
  // Mid-right
  { width: '42%', top: '34%',  left: '56%', rotate: -1.8,  z: 5, delay: 0.35 },
  // Bottom-center — raised up, not touching bottom
  { width: '38%', top: '55%',  left: '28%', rotate: -1.5,  z: 4, delay: 0.42 },
];

export function PolicyLayout({ data }: PolicyLayoutProps) {
  const images = data.gallery ?? [];

  return (
    <div className="max-w-7xl mx-auto w-full">
      {/* ── Desktop: left text | right collage ── */}
      <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-center" style={{ minHeight: '78vh' }}>
        {/* LEFT — clean text zone (5 cols) */}
        <motion.div variants={fadeInLeft} className="col-span-5 flex flex-col justify-center pr-4">
          {/* Title */}
          <h2 className="text-3xl xl:text-[2.5rem] font-bold tracking-tight text-slate-800 leading-[1.15]">
            {data.title}
          </h2>

          {data.subtitle && (
            <p className="mt-4 text-[0.9375rem] text-slate-500/80 leading-relaxed">
              {data.subtitle}
            </p>
          )}

          {/* Decorative divider */}
          <div className="mt-6 flex items-center gap-3">
            <div className="w-10 h-[2px] rounded-full bg-gradient-to-r from-blue-500/60 to-violet-400/30" />
            <span className="text-[11px] font-semibold text-blue-500/50 tracking-[0.2em] uppercase">
              政策要点
            </span>
          </div>

          {/* Key signals — styled list */}
          {data.body && data.body.length > 0 && (
            <motion.div variants={fadeInUp} className="mt-5 space-y-3">
              {data.body.map((p, i) => (
                <motion.div
                  key={i}
                  variants={staggerItem}
                  className="flex items-start gap-3 group"
                >
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-gradient-to-br from-blue-400 to-violet-500 shrink-0 group-hover:scale-125 transition-transform" />
                  <p className="text-[0.8125rem] text-slate-600/90 leading-relaxed">
                    {p.replace(/\*\*/g, '')}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Source tag */}
          <motion.div variants={staggerItem} className="mt-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/60 backdrop-blur-sm border border-white/50 shadow-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] text-slate-500/70 font-medium">
                来源：教育部官网 · gov.cn
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT — screenshot collage zone (7 cols) */}
        <div className="col-span-7 relative" style={{ minHeight: '70vh' }}>
          {images.map((item, i) => {
            const s = docStyles[i % docStyles.length];
            return (
              <motion.div
                key={i}
                variants={staggerItem}
                className="absolute group cursor-pointer"
                style={{
                  width: s.width,
                  top: s.top,
                  left: s.left,
                  zIndex: s.z,
                }}
                whileHover={{
                  scale: 1.05,
                  rotate: 0,
                  zIndex: 20,
                  transition: { duration: 0.35, ease: 'easeOut' },
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 24, rotate: s.rotate }}
                  whileInView={{ opacity: 1, y: 0, rotate: s.rotate }}
                  transition={{
                    duration: 0.6,
                    delay: s.delay,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="relative"
                  style={{ transform: `rotate(${s.rotate}deg)` }}
                >
                  {/* Paper frame with white border */}
                  <div className="rounded-xl overflow-hidden bg-white p-1.5 shadow-[0_6px_32px_rgba(0,0,0,0.07),0_1.5px_8px_rgba(0,0,0,0.03)] ring-1 ring-black/[0.04] group-hover:shadow-[0_14px_48px_rgba(59,130,246,0.12),0_4px_16px_rgba(0,0,0,0.05)] transition-shadow duration-500">
                    <img
                      src={item.image}
                      alt={item.caption ?? ''}
                      loading="lazy"
                      className="w-full h-auto rounded-lg object-cover"
                    />
                  </div>

                  {/* Caption badge — appears on hover */}
                  {item.caption && (
                    <div className="absolute -bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="inline-block px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md shadow-md border border-white/70 text-[11px] font-medium text-slate-600 leading-none whitespace-nowrap">
                        {item.caption}
                      </div>
                    </div>
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ── Mobile: stacked vertical ── */}
      <div className="lg:hidden space-y-6">
        <motion.div variants={fadeInUp}>
          <h2 className="text-2xl font-bold tracking-tight text-slate-800 leading-tight">
            {data.title}
          </h2>
          {data.subtitle && (
            <p className="mt-2 text-sm text-slate-500/80 leading-relaxed">{data.subtitle}</p>
          )}
        </motion.div>

        {/* Key signals */}
        {data.body && data.body.length > 0 && (
          <motion.div variants={fadeInUp} className="space-y-2.5">
            {data.body.map((p, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-br from-blue-400 to-violet-500 shrink-0" />
                <p className="text-[13px] text-slate-600/90 leading-relaxed">
                  {p.replace(/\*\*/g, '')}
                </p>
              </div>
            ))}
          </motion.div>
        )}

        {/* Stacked screenshots with slight rotation */}
        <motion.div variants={fadeInUp} className="space-y-4">
          {images.map((item, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className="rounded-xl overflow-hidden bg-white p-1.5 shadow-[0_4px_24px_rgba(0,0,0,0.06)] ring-1 ring-black/[0.04]"
              style={{
                transform: `rotate(${(i % 2 === 0 ? 1 : -1) * (0.6 + i * 0.25)}deg)`,
              }}
            >
              <img
                src={item.image}
                alt={item.caption ?? ''}
                loading="lazy"
                className="w-full h-auto rounded-lg object-cover"
              />
              {item.caption && (
                <p className="mt-1.5 px-2 pb-1 text-xs text-slate-500/70 font-medium">
                  {item.caption}
                </p>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
