import { motion } from 'framer-motion';
import { fadeInLeft, fadeInRight, fadeInUp, staggerItem } from '../hooks/useSlideAnimation';
import type { SlideData } from '../slides/types';
import { GlassPanel } from '../components/GlassPanel';
import { SlideVisual } from '../components/SlideVisual';
import { cn } from '../lib/cn';

interface TimelineLayoutProps {
  data: SlideData;
}

export function TimelineLayout({ data }: TimelineLayoutProps) {
  const isDark = data.bg === 'deep' || data.bg === 'ocean';
  const hasImages = data.images && data.images.length > 0;
  const isCarousel = data.imageDisplay === 'carousel';

  const timelineBlock = (
    <div className="relative">
      {/* Vertical line */}
      <div
        className={`absolute left-[11px] top-2 bottom-2 w-px ${
          isDark ? 'bg-white/15' : 'bg-gradient-to-b from-blue-300/60 via-indigo-300/40 to-transparent'
        }`}
      />

      <div className="space-y-5">
        {data.timeline?.map((item, i) => (
          <motion.div
            key={i}
            variants={staggerItem}
            className="relative flex gap-4"
          >
            {/* Node dot */}
            <div className="relative z-10 mt-1.5 shrink-0">
              <div className="w-[22px] h-[22px] rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center shadow-md shadow-blue-500/20">
                <div className="w-2 h-2 rounded-full bg-white" />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 pb-1">
              <span
                className={`text-xs font-semibold tracking-[0.1em] uppercase ${
                  isDark ? 'text-blue-300/70' : 'text-blue-500/70'
                }`}
              >
                {item.date}
              </span>
              <GlassPanel
                variant={isDark ? 'subtle' : 'default'}
                className="mt-1.5 p-4"
              >
                <h3
                  className={`text-sm sm:text-base font-semibold mb-1 ${
                    isDark ? 'text-white/90' : 'text-slate-800'
                  }`}
                >
                  {item.title}
                </h3>
                {item.description && (
                  <p
                    className={`text-xs sm:text-sm leading-relaxed whitespace-pre-line ${
                      isDark ? 'text-white/55' : 'text-slate-500/80'
                    }`}
                  >
                    {item.description}
                  </p>
                )}
              </GlassPanel>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  /* ── Layout with images: title + timeline on left, images on right ── */
  if (hasImages) {
    return (
      <div
        className={cn(
          'mx-auto w-full',
          isCarousel ? 'max-w-[min(96rem,100%)]' : 'max-w-6xl',
        )}
      >
        <div
          className={cn(
            'grid lg:grid-cols-12',
            isCarousel ? 'gap-5 lg:gap-8 items-center -mt-4' : 'gap-6 lg:gap-10 items-start',
          )}
        >
          {/* Left: title + timeline */}
          <div className={cn('flex flex-col gap-5', isCarousel ? 'lg:col-span-4' : 'lg:col-span-5')}>
            <motion.div variants={fadeInLeft}>
              <h2
                className={`text-2xl sm:text-3xl lg:text-[2.25rem] font-bold tracking-tight leading-tight ${
                  isDark ? 'text-white' : 'text-slate-800'
                }`}
              >
                {data.title}
              </h2>
              {data.subtitle && (
                <p
                  className={`mt-3 text-sm sm:text-[0.9375rem] leading-relaxed ${
                    isDark ? 'text-white/60' : 'text-slate-500/80'
                  }`}
                >
                  {data.subtitle}
                </p>
              )}
            </motion.div>

            <motion.div variants={fadeInUp}>
              {timelineBlock}
            </motion.div>
          </div>

          {/* Right: images */}
          <motion.div
            variants={fadeInRight}
            className={cn('flex items-center', isCarousel ? 'lg:col-span-8' : 'lg:col-span-7')}
          >
            <SlideVisual
              images={data.images}
              imageDisplay={data.imageDisplay}
              className="w-full"
            />
          </motion.div>
        </div>
      </div>
    );
  }

  /* ── Horizontal layout (no images) ── */
  const timelineItems = data.timeline ?? [];
  const desktopColsClass =
    timelineItems.length >= 6
      ? 'lg:grid-cols-6'
      : timelineItems.length === 5
        ? 'lg:grid-cols-5'
        : timelineItems.length === 4
          ? 'lg:grid-cols-4'
          : timelineItems.length === 3
            ? 'lg:grid-cols-3'
            : 'lg:grid-cols-2';
  const lineMarginClass =
    timelineItems.length >= 6
      ? 'mx-[7%]'
      : timelineItems.length === 5
        ? 'mx-[9%]'
        : 'mx-[12%]';

  return (
    <div className="max-w-6xl mx-auto w-full">
      {/* Title centered */}
      <motion.div variants={fadeInUp} className="text-center mb-10 lg:mb-14">
        <h2
          className={`text-2xl sm:text-3xl lg:text-[2.5rem] font-bold tracking-tight leading-[1.35] sm:leading-[1.35] lg:leading-[1.35] whitespace-pre-line ${
            isDark ? 'text-white' : 'text-slate-800'
          }`}
        >
          {data.title}
        </h2>
        {data.subtitle && (
          <p
            className={`mt-4 text-sm sm:text-[0.9375rem] leading-relaxed max-w-2xl mx-auto ${
              isDark ? 'text-white/60' : 'text-slate-500/80'
            }`}
          >
            {data.subtitle}
          </p>
        )}
      </motion.div>

      {/* Horizontal progress bar */}
      <motion.div variants={fadeInUp} className="relative">
        {/* Connecting line */}
        <div className="hidden lg:block absolute top-[26px] left-0 right-0 h-px">
          <div
            className={cn(
              'h-full',
              lineMarginClass,
              isDark
                ? 'bg-gradient-to-r from-transparent via-white/15 to-transparent'
                : 'bg-gradient-to-r from-blue-200/40 via-blue-300/60 to-indigo-200/40',
            )}
          />
        </div>

        <div className={cn('grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6', desktopColsClass)}>
          {timelineItems.map((item, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className="relative flex flex-col items-center text-center group"
            >
              {/* Step indicator */}
              <div className="relative z-10 mb-5">
                <div className="w-[52px] h-[52px] rounded-2xl bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/30 group-hover:scale-105 transition-all duration-300">
                  <span className="text-white font-bold text-sm">{item.date}</span>
                </div>
              </div>

              {/* Card */}
              <GlassPanel
                variant={isDark ? 'subtle' : 'default'}
                className="w-full p-5 lg:p-6 group-hover:shadow-lg group-hover:shadow-blue-500/[0.06] group-hover:-translate-y-1 transition-all duration-300"
              >
                <h3
                  className={`text-sm sm:text-base font-semibold mb-2 ${
                    isDark ? 'text-white/90' : 'text-slate-800'
                  }`}
                >
                  {item.title}
                </h3>
                {item.description && (
                  <p
                    className={`text-xs sm:text-sm leading-relaxed whitespace-pre-line ${
                      isDark ? 'text-white/55' : 'text-slate-500/80'
                    }`}
                  >
                    {item.description}
                  </p>
                )}
              </GlassPanel>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
