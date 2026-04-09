import { motion } from 'framer-motion';
import { fadeInUp, staggerItem } from '../hooks/useSlideAnimation';
import type { SlideData } from '../slides/types';

interface WechatBubbleLayoutProps {
  data: SlideData;
}

/* ── tiny inline SVG icons ── */
const MicIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-4 h-4">
    <rect x="9" y="2" width="6" height="12" rx="3" />
    <path d="M5 10a7 7 0 0 0 14 0" />
    <line x1="12" y1="19" x2="12" y2="22" />
  </svg>
);

const PlusIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const SmileIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-4 h-4">
    <circle cx="12" cy="12" r="10" />
    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
    <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth={2.5} strokeLinecap="round" />
    <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth={2.5} strokeLinecap="round" />
  </svg>
);

export function WechatBubbleLayout({ data }: WechatBubbleLayoutProps) {
  const rows = data.tableRows ?? [];

  return (
    <div className="max-w-xl mx-auto w-full">
      {/* Title */}
      {data.title && (
        <motion.h2
          variants={fadeInUp}
          className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight mb-1 leading-tight text-center bg-gradient-to-r from-emerald-600 via-teal-500 to-green-500 bg-clip-text text-transparent"
        >
          {data.title}
        </motion.h2>
      )}

      {data.subtitle && (
        <motion.p
          variants={fadeInUp}
          className="text-[11px] sm:text-xs text-slate-600 mb-3 max-w-2xl leading-snug text-center mx-auto whitespace-pre-line"
        >
          {data.subtitle}
        </motion.p>
      )}

      {/* ── WeChat-style phone frame ── */}
      <motion.div
        variants={fadeInUp}
        className="rounded-[1.75rem] overflow-hidden shadow-2xl shadow-black/10 border border-slate-200/60 bg-white"
      >
        {/* ── Status bar ── */}
        <div className="bg-[#EDEDED] px-4 pt-1.5 pb-1 flex items-center justify-between text-[9px] text-slate-500 font-medium">
          <span>9:41</span>
          <div className="flex items-center gap-1">
            <svg viewBox="0 0 17 12" className="w-[14px] h-[10px] fill-slate-500">
              <rect x="0" y="8" width="3" height="4" rx="0.5" />
              <rect x="4.5" y="5" width="3" height="7" rx="0.5" />
              <rect x="9" y="2" width="3" height="10" rx="0.5" />
              <rect x="13.5" y="0" width="3" height="12" rx="0.5" />
            </svg>
            <svg viewBox="0 0 25 12" className="w-[20px] h-[10px]">
              <rect x="0" y="0.5" width="22" height="11" rx="2" stroke="currentColor" strokeWidth="1" fill="none" className="text-slate-500" />
              <rect x="2" y="2.5" width="16" height="7" rx="1" className="fill-slate-500" />
              <rect x="23" y="3.5" width="2" height="5" rx="1" className="fill-slate-400" />
            </svg>
          </div>
        </div>

        {/* ── Nav bar ── */}
        <div className="bg-[#EDEDED] px-4 pb-2 flex items-center justify-center border-b border-slate-300/50">
          <span className="text-xs font-semibold text-slate-800 tracking-wide">稳了智能助手</span>
        </div>

        {/* ── Chat area ── */}
        <div className="bg-[#EDEDED] px-2.5 py-2 space-y-2">
          {rows.map((row, ri) => (
            <motion.div key={ri} variants={staggerItem} className="space-y-1">
              {/* ── Teacher message (right, green bubble) ── */}
              <div className="flex items-start justify-end gap-1.5">
                <div className="flex flex-col items-end max-w-[78%]">
                  <div className="relative bg-[#95EC69] text-slate-900 text-xs leading-relaxed px-2.5 py-1.5 rounded-xl rounded-tr-sm shadow-sm">
                    {row[0]}
                    <div className="absolute top-2 -right-1.5 w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[5px] border-l-[#95EC69]" />
                  </div>
                </div>
                <div className="flex-shrink-0 w-7 h-7 rounded-md bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-[10px] font-bold shadow-sm">
                  师
                </div>
              </div>

              {/* ── System reply (left, white bubble) ── */}
              <div className="flex items-start gap-1.5">
                <div className="flex-shrink-0 w-7 h-7 rounded-md bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-sm">
                  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-white" stroke="currentColor" strokeWidth={2}>
                    <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18" />
                  </svg>
                </div>
                <div className="flex flex-col items-start max-w-[78%]">
                  <div className="relative bg-white text-slate-800 text-xs leading-relaxed px-2.5 py-1.5 rounded-xl rounded-tl-sm shadow-sm">
                    <span className="text-emerald-600 font-medium text-[10px] block mb-0.5">✓ 已自动处理</span>
                    {row[1]}
                    <div className="absolute top-2 -left-1.5 w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-r-[5px] border-r-white" />
                  </div>
                </div>
              </div>

              {/* Time divider */}
              {ri < rows.length - 1 && (
                <div className="flex justify-center pt-0.5">
                  <span className="text-[9px] text-slate-400 bg-slate-300/60 px-1.5 py-px rounded-sm">
                    {['下午 2:30', '下午 3:15', '下午 4:02'][ri] ?? ''}
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* ── Input bar ── */}
        <div className="bg-[#F6F6F6] border-t border-slate-300/50 px-2.5 py-1.5 flex items-center gap-2">
          <button className="text-slate-500">
            <MicIcon />
          </button>
          <div className="flex-1 bg-white rounded-md h-7 flex items-center px-2.5 text-[11px] text-slate-400 border border-slate-200/80">
            说点什么…
          </div>
          <button className="text-slate-500">
            <SmileIcon />
          </button>
          <button className="text-slate-500">
            <PlusIcon />
          </button>
        </div>

        {/* ── Home indicator ── */}
        <div className="bg-[#F6F6F6] pb-1.5 pt-0.5 flex justify-center">
          <div className="w-24 h-1 bg-slate-300 rounded-full" />
        </div>
      </motion.div>

      {/* Bottom note */}
      {data.body && (
        <motion.p
          variants={fadeInUp}
          className="mt-3 text-xs text-slate-500 font-medium text-center"
        >
          {data.body[0]}
        </motion.p>
      )}
    </div>
  );
}
