import { motion } from 'framer-motion';
import { fadeInUp, scaleIn, staggerItem, fadeInLeft, fadeInRight } from '../hooks/useSlideAnimation';
import type { SlideData } from '../slides/types';

interface WechatCombinedLayoutProps {
  data: SlideData;
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

/* ── Simple rounded frame — no device chrome ── */
function PhoneImage({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl overflow-hidden shadow-xl shadow-black/8 ring-1 ring-black/[0.04] ${className ?? ''}`}>
      {children}
    </div>
  );
}

export function WechatCombinedLayout({ data }: WechatCombinedLayoutProps) {
  const highlights = data.highlights ?? [];
  const notifyImage = data.image ?? '';
  const voiceImage = data.gallery?.[0]?.image ?? '';

  return (
    <div className="max-w-7xl mx-auto w-full px-4 flex flex-col h-full">
      {/* ── Header ── */}
      <div className="text-center mb-5 lg:mb-6 shrink-0">
        {data.subtitle && (
          <motion.p
            variants={fadeInUp}
            className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-1.5 text-emerald-500/60"
          >
            {data.subtitle}
          </motion.p>
        )}
        {data.title && (
          <motion.h2
            variants={scaleIn}
            className="text-2xl sm:text-3xl lg:text-[2.25rem] font-bold tracking-tight leading-[1.15] text-slate-800"
          >
            {data.title}
          </motion.h2>
        )}
        {data.body && data.body[0] && (
          <motion.p
            variants={fadeInUp}
            className="text-xs sm:text-[0.8125rem] text-slate-500/80 mt-1.5 max-w-3xl mx-auto leading-relaxed"
          >
            {data.body[0]}
          </motion.p>
        )}
      </div>

      {/* ── Main: Two phones with center text ── */}
      <div className="flex-1 min-h-0 flex items-center justify-center">
        <div className="flex items-center gap-4 lg:gap-6">

          {/* ── LEFT phone ── */}
          <motion.div variants={fadeInLeft} className="flex flex-col items-center">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-5 h-5 rounded-md bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-sm">
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} className="w-3 h-3">
                  <rect x="9" y="2" width="6" height="12" rx="3" />
                  <path d="M5 10a7 7 0 0 0 14 0" />
                </svg>
              </div>
              <span className="text-xs font-semibold text-slate-600">数据录入 · 说句话就能记录</span>
            </div>

            <PhoneImage>
              <img
                src={voiceImage}
                alt="微信语音录入"
                className="w-auto max-h-[44vh] object-contain"
              />
            </PhoneImage>
          </motion.div>

          {/* ── CENTER divider / text column ── */}
          <motion.div variants={fadeInUp} className="hidden lg:flex flex-col items-center justify-center py-8 px-2 max-w-[160px]">
            {/* Vertical line top */}
            <div className="w-px h-10 bg-gradient-to-b from-transparent to-slate-200" />

            {/* Center badge */}
            <div className="my-4 flex flex-col items-center gap-3 text-center">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-50 to-blue-50 border border-slate-200/60 flex items-center justify-center shadow-sm">
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-emerald-500" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M8 12h8M12 8v8" strokeLinecap="round" />
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                </svg>
              </div>
              <p className="text-[11px] font-semibold text-slate-500 leading-snug">
                一个微信<br/>两种能力
              </p>
              <p className="text-[10px] text-slate-400 leading-relaxed">
                录入即归档<br/>变动即推送<br/>无需安装任何 App
              </p>
            </div>

            {/* Vertical line bottom */}
            <div className="w-px h-10 bg-gradient-to-b from-slate-200 to-transparent" />
          </motion.div>

          {/* ── RIGHT phone ── */}
          <motion.div variants={fadeInRight} className="flex flex-col items-center">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-5 h-5 rounded-md bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center shadow-sm">
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} className="w-3 h-3">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                  <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                </svg>
              </div>
              <span className="text-xs font-semibold text-slate-600">消息推送 · 重要信息实时触达</span>
            </div>

            <PhoneImage>
              <img
                src={notifyImage}
                alt="微信通知推送"
                className="w-auto max-h-[44vh] object-contain"
              />
            </PhoneImage>
          </motion.div>
        </div>
      </div>

      {/* ── Bottom highlights ── */}
      {highlights.length > 0 && (
        <motion.div variants={staggerContainer} className="mt-7 shrink-0 flex flex-wrap justify-center gap-2">
          {highlights.map((h, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/70 backdrop-blur-sm border border-white/50 shadow-[0_1px_8px_rgba(0,0,0,0.03)]"
            >
              <div className="w-1 h-1 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 shrink-0" />
              <span className="text-[10px] font-semibold text-slate-600">{h.label}</span>
              {h.description && (
                <span className="text-[10px] text-slate-400">{h.description}</span>
              )}
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* ── Platform compatibility note ── */}
      <motion.p
        variants={fadeInUp}
        className="mt-3 shrink-0 text-center text-[11px] text-slate-400 leading-relaxed"
      >
        同时兼容钉钉、飞书等主流 IM 软件，也可不依赖任何 IM，直接在系统内使用全部功能
      </motion.p>
    </div>
  );
}
