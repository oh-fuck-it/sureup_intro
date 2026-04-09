import { motion } from 'framer-motion';
import { fadeInUp, fadeInRight, staggerItem } from '../hooks/useSlideAnimation';
import type { SlideData } from '../slides/types';
import { GlassPanel } from '../components/GlassPanel';

interface IntroLayoutProps {
  data: SlideData;
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

/**
 * IntroLayout — text-dominant introduction page.
 * Left (7 cols): title + subtitle + body + highlight cards.
 * Right (5 cols): single phone in iPhone frame, vertically centered.
 */
export function IntroLayout({ data }: IntroLayoutProps) {
  const highlights = data.highlights ?? [];
  const images = data.images ?? [];
  const phoneImg = images[0];

  return (
    <div className="max-w-7xl mx-auto w-full px-4">
      {/* Desktop: 7/5 split */}
      <div className="hidden lg:grid lg:grid-cols-12 gap-8 xl:gap-12 relative">
        {/* Text block — 7 cols */}
        <motion.div variants={staggerContainer} className="col-span-7 flex flex-col justify-center">
          {data.chapter && (
            <motion.div variants={staggerItem} className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-[2px] bg-gradient-to-r from-blue-500/80 to-blue-400/30 rounded-full" />
              <span className="text-xs font-semibold text-blue-500/70 tracking-[0.15em] uppercase">
                {data.chapter}
              </span>
            </motion.div>
          )}

          <motion.h2
            variants={staggerItem}
            className="text-2xl leading-[1.25] sm:text-3xl sm:leading-[1.25] lg:text-[2.5rem] lg:leading-[1.25] font-bold tracking-tight text-slate-800 mb-4 lg:mb-5 whitespace-pre-line"
          >
            {data.title}
          </motion.h2>

          {data.subtitle && (
            <motion.p
              variants={staggerItem}
              className="text-base sm:text-lg text-slate-500/80 font-medium mb-4 lg:mb-5 leading-relaxed"
            >
              {data.subtitle}
            </motion.p>
          )}

          {data.body && (
            <motion.div variants={staggerItem} className="space-y-3 mb-6">
              {data.body.map((p, i) => (
                <p key={i} className="text-sm sm:text-[0.9375rem] text-slate-600/85 leading-[1.8]">
                  {p}
                </p>
              ))}
            </motion.div>
          )}

          {highlights.length > 0 && (
            <motion.div variants={staggerItem} className="grid gap-3 sm:grid-cols-2">
              {highlights.map((h, i) => (
                <GlassPanel
                  key={i}
                  variant="subtle"
                  className="p-4 group hover:shadow-md hover:shadow-blue-500/[0.04] transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className="text-sm font-semibold text-slate-700">{h.label}</div>
                  {h.description && (
                    <div className="text-xs text-slate-500/70 mt-1 leading-relaxed">{h.description}</div>
                  )}
                </GlassPanel>
              ))}
            </motion.div>
          )}
        </motion.div>

        {/* Phone in iPhone frame — 5 cols */}
        {phoneImg && (
          <motion.div
            variants={fadeInRight}
            className="col-span-5 flex items-center justify-center self-center"
          >
            <div className="w-[240px] xl:w-[260px]">
              <div className="bg-gradient-to-b from-slate-700 to-slate-900 rounded-[2.5rem] p-[4px] shadow-2xl shadow-slate-900/20 ring-1 ring-white/[0.08]">
                <div className="relative rounded-[2.3rem] overflow-hidden bg-white">
                  {/* Dynamic Island */}
                  <div className="absolute top-[8px] left-1/2 -translate-x-1/2 w-[28%] h-[18px] bg-black rounded-full z-20" />
                  {phoneImg.src ? (
                    <img src={phoneImg.src} alt={phoneImg.alt} className="w-full h-auto block" loading="lazy" />
                  ) : (
                    <div className="aspect-[9/16] bg-gradient-to-br from-slate-50 to-blue-50/30 flex items-center justify-center">
                      <span className="text-[10px] text-slate-400 px-4 text-center">{phoneImg.alt}</span>
                    </div>
                  )}
                  {/* Home indicator */}
                  <div className="absolute bottom-[6px] left-1/2 -translate-x-1/2 w-[36%] h-[4px] bg-black/20 rounded-full" />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Mobile: stacked */}
      <div className="flex flex-col gap-8 lg:hidden">
        <motion.div variants={fadeInUp} className="flex flex-col">
          {data.chapter && (
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-[2px] bg-gradient-to-r from-blue-500/80 to-blue-400/30 rounded-full" />
              <span className="text-xs font-semibold text-blue-500/70 tracking-[0.15em] uppercase">
                {data.chapter}
              </span>
            </div>
          )}
          <h2 className="text-2xl font-bold tracking-tight text-slate-800 mb-4 leading-[1.25] whitespace-pre-line">
            {data.title}
          </h2>
          {data.subtitle && (
            <p className="text-base text-slate-500/80 font-medium mb-4 leading-relaxed">{data.subtitle}</p>
          )}
          {data.body?.map((p, i) => (
            <p key={i} className="text-sm text-slate-600/85 leading-[1.8] mb-3">{p}</p>
          ))}
          {highlights.length > 0 && (
            <div className="grid gap-3 grid-cols-2 mt-4">
              {highlights.map((h, i) => (
                <GlassPanel key={i} variant="subtle" className="p-3">
                  <div className="text-sm font-semibold text-slate-700">{h.label}</div>
                  {h.description && (
                    <div className="text-xs text-slate-500/70 mt-1 leading-relaxed">{h.description}</div>
                  )}
                </GlassPanel>
              ))}
            </div>
          )}
        </motion.div>
        {phoneImg && (
          <div className="flex justify-center">
            <div className="w-48">
              <div className="bg-gradient-to-b from-slate-700 to-slate-900 rounded-[2rem] p-[3px] shadow-2xl shadow-slate-900/20 ring-1 ring-white/[0.08]">
                <div className="relative rounded-[1.8rem] overflow-hidden bg-white">
                  <div className="absolute top-[6px] left-1/2 -translate-x-1/2 w-[28%] h-[14px] bg-black rounded-full z-20" />
                  {phoneImg.src ? (
                    <img src={phoneImg.src} alt={phoneImg.alt} className="w-full h-auto block" loading="lazy" />
                  ) : (
                    <div className="aspect-[9/19] bg-gradient-to-br from-slate-50 to-blue-50/30 flex items-center justify-center">
                      <span className="text-[9px] text-slate-400 px-3 text-center">{phoneImg.alt}</span>
                    </div>
                  )}
                  <div className="absolute bottom-[5px] left-1/2 -translate-x-1/2 w-[36%] h-[3px] bg-black/20 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
