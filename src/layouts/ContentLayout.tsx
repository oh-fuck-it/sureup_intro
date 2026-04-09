import { motion } from 'framer-motion';
import { fadeInLeft, fadeInRight, fadeInUp, staggerItem } from '../hooks/useSlideAnimation';
import type { SlideData } from '../slides/types';
import { SlideVisual } from '../components/SlideVisual';
import { GlassPanel } from '../components/GlassPanel';
import { cn } from '../lib/cn';

interface ContentLayoutProps {
  data: SlideData;
}

export function ContentLayout({ data }: ContentLayoutProps) {
  const imgRight = data.imagePosition !== 'left';
  const hasImages = data.images && data.images.length > 0;
  const hasImage = hasImages || !!data.image || !!data.imageAlt;
  const highlightCount = data.highlights?.length ?? 0;
  const isCarousel = data.imageDisplay === 'carousel';
  const isWideVisual = isCarousel || data.imageDisplay === 'duo-device' || data.imageDisplay === 'phone-fan' || data.imageDisplay === 'device-showcase';

  const textBlock = (
    <div className="flex flex-col justify-center relative">
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
        className="text-2xl sm:text-3xl lg:text-[2.5rem] font-bold tracking-tight text-slate-800 mb-4 lg:mb-5 leading-[1.35] sm:leading-[1.35] lg:leading-[1.35] whitespace-pre-line"
      >
        {data.title}
      </motion.h2>

      {data.subtitle && (
        <motion.p
          variants={staggerItem}
          className="text-base sm:text-lg text-slate-500/80 font-medium mb-5 lg:mb-6 leading-relaxed"
        >
          {data.subtitle}
        </motion.p>
      )}

      {data.body && (
        <motion.div variants={staggerItem} className="space-y-3">
          {data.body.map((p, i) => (
            <p key={i} className="text-sm sm:text-[0.9375rem] text-slate-600/85 leading-[1.8]">
              {p}
            </p>
          ))}
        </motion.div>
      )}

      {/* Highlights: flow style — horizontal capsules when few, grid when many */}
      {data.highlights && highlightCount <= 3 && (
        <motion.div variants={staggerItem} className="mt-7 flex flex-wrap gap-3">
          {data.highlights.map((h, i) => (
            <div key={i} className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/70 backdrop-blur-sm border border-white/50 shadow-sm hover:shadow-md transition-shadow duration-300">
              {h.value && (
                <span className="text-lg font-bold text-gradient shrink-0">{h.value}</span>
              )}
              <div>
                <div className="text-sm font-semibold text-slate-700 leading-tight">{h.label}</div>
                {h.description && (
                  <div className="text-[11px] text-slate-500/60 mt-0.5 leading-snug">{h.description}</div>
                )}
              </div>
            </div>
          ))}
        </motion.div>
      )}

      {data.highlights && highlightCount > 3 && (
        <motion.div variants={staggerItem} className="mt-7 grid gap-2.5 sm:grid-cols-2">
          {data.highlights.map((h, i) => (
            <GlassPanel key={i} variant="subtle" className="p-4 group hover:shadow-md hover:shadow-blue-500/[0.04] transition-all duration-300 hover:-translate-y-0.5">
              {h.value && (
                <div className="text-xl sm:text-2xl font-bold text-gradient mb-1">
                  {h.value}
                </div>
              )}
              <div className="text-sm font-semibold text-slate-700">{h.label}</div>
              {h.description && (
                <div className="text-xs text-slate-500/70 mt-1 leading-relaxed">{h.description}</div>
              )}
            </GlassPanel>
          ))}
        </motion.div>
      )}
    </div>
  );

  const visualBlock = hasImage ? (
    <motion.div
      variants={imgRight ? fadeInRight : fadeInLeft}
      className="flex items-center"
    >
      <SlideVisual
        image={data.image}
        alt={data.imageAlt}
        images={data.images}
        imageDisplay={data.imageDisplay}
        className="w-full"
      />
    </motion.div>
  ) : null;

  if (!hasImage) {
    return (
      <div className="max-w-4xl mx-auto w-full">
        <motion.div variants={fadeInUp}>{textBlock}</motion.div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        'mx-auto w-full',
        isWideVisual ? 'max-w-[min(96rem,100%)]' : 'max-w-7xl',
      )}
    >
      {/* Desktop: asymmetric layout — wide visuals get more column space */}
      <div
        className={cn(
          'hidden lg:grid lg:grid-cols-12 items-center',
          isWideVisual ? 'gap-5 xl:gap-8' : 'gap-6 xl:gap-10',
        )}
      >
        {imgRight ? (
          <>
            <motion.div
              variants={fadeInLeft}
              className={cn(isWideVisual ? 'col-span-3 pr-1 xl:pr-2' : 'col-span-4 pr-2')}
            >
              {textBlock}
            </motion.div>
            <div className={cn(isWideVisual ? 'col-span-9 pl-1 xl:pl-2' : 'col-span-8 pl-2')}>
              {visualBlock}
            </div>
          </>
        ) : (
          <>
            <div className={cn(isWideVisual ? 'col-span-9 pr-1 xl:pr-2' : 'col-span-8 pr-2')}>
              {visualBlock}
            </div>
            <motion.div
              variants={fadeInRight}
              className={cn(isWideVisual ? 'col-span-3 pl-1 xl:pl-2' : 'col-span-4 pl-2')}
            >
              {textBlock}
            </motion.div>
          </>
        )}
      </div>

      {/* Mobile: stacked */}
      <div className="flex flex-col gap-8 lg:hidden">
        <motion.div variants={fadeInUp}>{textBlock}</motion.div>
        {visualBlock}
      </div>
    </div>
  );
}
