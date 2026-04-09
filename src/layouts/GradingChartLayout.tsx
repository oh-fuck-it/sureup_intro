import { motion } from 'framer-motion';
import { fadeInLeft, fadeInRight, staggerItem } from '../hooks/useSlideAnimation';
import type { SlideData } from '../slides/types';

interface GradingChartLayoutProps {
  data: SlideData;
}

/* ── Data ── */
const radarSubjects = ['语文', '数学', '英语', '物理', '化学', '生物'];
const radarAI =      [94.2,  97.8,  96.5,  95.1,  96.3,  93.9];
const radarTeacher = [95.1,  97.3,  96.9,  94.7,  95.8,  94.5];

const schoolBars = [
  { school: '实验中学', ai: 96.8, teacher: 96.2 },
  { school: '外国语',   ai: 97.1, teacher: 96.5 },
  { school: '一中',     ai: 96.2, teacher: 95.9 },
  { school: '二中',     ai: 95.3, teacher: 95.7 },
  { school: '附属中学', ai: 94.9, teacher: 95.3 },
  { school: '五十二中',     ai: 95.8, teacher: 95.1 },
];

const scatterData = [
  { subject: '语文', diff: 1.2 },
  { subject: '数学', diff: 0.3 },
  { subject: '英语', diff: 0.8 },
  { subject: '物理', diff: 0.5 },
  { subject: '化学', diff: 0.4 },
  { subject: '生物', diff: 0.4 },
  { subject: '历史', diff: 0.7 },
];

const ringStats = [
  { label: '总分一致率',  value: 95.6, colors: ['#34d399', '#14b8a6'] },
  { label: '逐题吻合率',  value: 93.2, colors: ['#60a5fa', '#6366f1'] },
  { label: '教师免改率',  value: 97.1, colors: ['#a78bfa', '#9333ea'] },
  { label: '需人工调整',  value: 2.8,  colors: ['#94a3b8', '#64748b'] },
];

/* ── Radar ── scale 85-100 so shapes are large but differences visible */
function RadarChart() {
  const cx = 130, cy = 130, maxR = 100;
  const n = radarSubjects.length;
  const minVal = 85, maxVal = 100;

  function polar(i: number, v: number) {
    const a = (Math.PI * 2 * i) / n - Math.PI / 2;
    const r = ((v - minVal) / (maxVal - minVal)) * maxR;
    return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
  }

  function pts(vals: number[]) {
    return vals.map((v, i) => { const p = polar(i, v); return `${p.x},${p.y}`; }).join(' ');
  }

  return (
    <svg viewBox="0 0 260 260" className="w-full h-full">
      {/* Grid rings */}
      {[88, 91, 94, 97, 100].map((lv) => (
        <polygon key={lv} points={Array.from({ length: n }, (_, i) => { const p = polar(i, lv); return `${p.x},${p.y}`; }).join(' ')}
          fill="none" stroke="#cbd5e1" strokeWidth="0.6" opacity="0.35" />
      ))}
      {/* Grid labels */}
      {[88, 94, 100].map((lv) => {
        const p = polar(0, lv);
        return <text key={lv} x={p.x + 4} y={p.y - 3} className="text-[7px] fill-slate-400">{lv}</text>;
      })}
      {/* Axes */}
      {radarSubjects.map((_, i) => {
        const p = polar(i, 100);
        return <line key={i} x1={cx} y1={cy} x2={p.x} y2={p.y} stroke="#e2e8f0" strokeWidth="0.5" opacity="0.3" />;
      })}
      {/* Teacher fill */}
      <motion.polygon points={pts(radarTeacher)} fill="rgba(99,102,241,0.12)" stroke="#818cf8" strokeWidth="1.8" strokeLinejoin="round"
        initial={{ opacity: 0, scale: 0.4 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.25 }} style={{ transformOrigin: `${cx}px ${cy}px` }} />
      {/* AI fill */}
      <motion.polygon points={pts(radarAI)} fill="rgba(20,184,166,0.14)" stroke="#14b8a6" strokeWidth="1.8" strokeLinejoin="round"
        initial={{ opacity: 0, scale: 0.4 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }} style={{ transformOrigin: `${cx}px ${cy}px` }} />
      {/* Dots + value labels */}
      {radarAI.map((v, i) => { const p = polar(i, v); return <circle key={`a${i}`} cx={p.x} cy={p.y} r="3" fill="#14b8a6" />; })}
      {radarTeacher.map((v, i) => { const p = polar(i, v); return <circle key={`t${i}`} cx={p.x} cy={p.y} r="3" fill="#818cf8" />; })}
      {/* Subject labels */}
      {radarSubjects.map((s, i) => {
        const p = polar(i, 113);
        return <text key={s} x={p.x} y={p.y} textAnchor="middle" dominantBaseline="middle" className="text-[11px] font-semibold fill-slate-600">{s}</text>;
      })}
    </svg>
  );
}

/* ── Grouped horizontal bars — tall and vivid ── */
function GroupedBarChart() {
  const minBase = 93;
  const range = 5; // 93-98 scale
  return (
    <div className="space-y-3">
      {schoolBars.map((d, i) => {
        const aiW = ((d.ai - minBase) / range) * 100;
        const tW = ((d.teacher - minBase) / range) * 100;
        return (
          <div key={d.school} className="grid grid-cols-[52px_1fr] gap-2 items-center">
            <span className="text-[10px] font-semibold text-slate-500 text-right truncate">{d.school}</span>
            <div className="space-y-[3px]">
              <div className="flex items-center gap-2">
                <div className="h-[10px] rounded-full bg-slate-100/50 flex-1 overflow-hidden">
                  <motion.div className="h-full rounded-full bg-gradient-to-r from-teal-400 to-emerald-500"
                    initial={{ width: 0 }} whileInView={{ width: `${aiW}%` }} viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 + i * 0.05, ease: [0.25, 0.46, 0.45, 0.94] }} />
                </div>
                <span className="text-[8px] font-bold text-teal-600 w-8 text-right">{d.ai}%</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-[10px] rounded-full bg-slate-100/50 flex-1 overflow-hidden">
                  <motion.div className="h-full rounded-full bg-gradient-to-r from-indigo-300 to-indigo-500"
                    initial={{ width: 0 }} whileInView={{ width: `${tW}%` }} viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.15 + i * 0.05, ease: [0.25, 0.46, 0.45, 0.94] }} />
                </div>
                <span className="text-[8px] font-bold text-indigo-500 w-8 text-right">{d.teacher}%</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ── Dot deviation chart ── */
function DeviationChart() {
  const maxDiff = 1.5;
  return (
    <div className="space-y-2">
      {scatterData.map((d, i) => {
        const pct = (d.diff / maxDiff) * 100;
        return (
          <div key={d.subject} className="grid grid-cols-[32px_1fr_28px] gap-2 items-center">
            <span className="text-[9px] font-semibold text-slate-500 text-right">{d.subject}</span>
            <div className="relative h-[6px] rounded-full bg-slate-100/50">
              <motion.div className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-amber-300 to-orange-400"
                initial={{ width: 0 }} whileInView={{ width: `${pct}%` }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.04 }} />
              <motion.div
                className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white border-2 border-orange-400 shadow-sm"
                initial={{ left: 0, opacity: 0 }} whileInView={{ left: `${pct}%`, opacity: 1 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.04 }}
                style={{ marginLeft: -6 }}
              />
            </div>
            <span className="text-[8px] font-bold text-orange-500">±{d.diff}</span>
          </div>
        );
      })}
    </div>
  );
}

export function GradingChartLayout({ data }: GradingChartLayoutProps) {
  return (
    <div className="mx-auto w-full max-w-7xl">
      {/* Desktop */}
      <div className="hidden lg:grid lg:grid-cols-12 items-center gap-6 xl:gap-10">
        {/* Left: text */}
        <motion.div variants={fadeInLeft} className="col-span-4 pr-2 flex flex-col justify-center">
          {data.chapter && (
            <motion.div variants={staggerItem} className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-[2px] bg-gradient-to-r from-emerald-500/80 to-teal-400/30 rounded-full" />
              <span className="text-xs font-semibold text-emerald-600/70 tracking-[0.15em] uppercase">
                {data.chapter}
              </span>
            </motion.div>
          )}

          <motion.h2
            variants={staggerItem}
            className="font-bold tracking-tight text-slate-800 mb-4 lg:mb-5 whitespace-pre-line"
            style={{ fontSize: '2.5rem', lineHeight: 1.5 }}
          >
            {data.title}
          </motion.h2>

          {data.subtitle && (
            <motion.p variants={staggerItem} className="text-base sm:text-lg text-slate-500/80 font-medium mb-5 lg:mb-6 leading-relaxed">
              {data.subtitle}
            </motion.p>
          )}

          {data.body?.map((p, i) => (
            <motion.p key={i} variants={staggerItem} className="text-sm sm:text-[0.9375rem] text-slate-600/85 leading-[1.8] mb-3">
              {p}
            </motion.p>
          ))}
        </motion.div>

        {/* Right: rich dashboard */}
        <motion.div variants={fadeInRight} className="col-span-8 pl-2">
          <div className="rounded-3xl bg-white/55 backdrop-blur-sm border border-white/50 shadow-lg shadow-slate-200/25 p-5 xl:p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-[14px] font-bold text-slate-700">14 所试用学校联合测评</h3>
                <p className="text-[10px] text-slate-400 mt-0.5">2024 秋季学期 · 12,847 份试卷 · 7 大学科</p>
              </div>
              <div className="flex items-center gap-3 text-[9px] font-medium text-slate-400">
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-teal-500" />AI</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-indigo-400" />教师</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-orange-400" />偏差</span>
              </div>
            </div>

            {/* Row 1: Radar + Grouped bars */}
            <div className="grid grid-cols-5 gap-4 mb-4">
              <div className="col-span-2 rounded-2xl bg-white/70 border border-slate-100/50 p-1.5 pt-2">
                <p className="text-[10px] font-semibold text-slate-400 mb-0 px-1.5">学科一致率</p>
                <div className="w-full aspect-square max-w-[280px] mx-auto -mt-2 -mb-1">
                  <RadarChart />
                </div>
              </div>
              <div className="col-span-3 rounded-2xl bg-white/70 border border-slate-100/50 p-4 flex flex-col">
                <p className="text-[10px] font-semibold text-slate-400 mb-3">各校 AI vs 教师评分</p>
                <div className="flex-1"><GroupedBarChart /></div>
              </div>
            </div>

            {/* Row 2: Deviation dots + Rings */}
            <div className="grid grid-cols-5 gap-4">
              {/* Deviation */}
              <div className="col-span-2 rounded-2xl bg-white/70 border border-slate-100/50 p-4">
                <p className="text-[10px] font-semibold text-slate-400 mb-3">平均分差（每题）</p>
                <DeviationChart />
              </div>
              {/* Ring stats */}
              <div className="col-span-3 grid grid-cols-2 gap-3">
                {ringStats.map((s, i) => {
                  const circumference = 2 * Math.PI * 28;
                  const displayVal = s.label === '需人工调整' ? s.value : s.value;
                  const ringPct = s.label === '需人工调整' ? s.value / 10 : s.value / 100;
                  const offset = circumference - ringPct * circumference;
                  return (
                    <div key={s.label} className="rounded-2xl bg-white/70 border border-slate-100/50 p-3 flex items-center gap-3">
                      <div className="relative w-[48px] h-[48px] shrink-0">
                        <svg viewBox="0 0 64 64" className="w-full h-full -rotate-90">
                          <circle cx="32" cy="32" r="28" fill="none" stroke="#e2e8f0" strokeWidth="4" opacity="0.25" />
                          <motion.circle cx="32" cy="32" r="28" fill="none" strokeWidth="4" strokeLinecap="round"
                            stroke={`url(#rg-${i})`} strokeDasharray={circumference}
                            initial={{ strokeDashoffset: circumference }}
                            whileInView={{ strokeDashoffset: offset }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 + i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }} />
                          <defs>
                            <linearGradient id={`rg-${i}`} x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor={s.colors[0]} />
                              <stop offset="100%" stopColor={s.colors[1]} />
                            </linearGradient>
                          </defs>
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-[10px] font-bold text-slate-700">
                            {s.label === '需人工调整' ? `${displayVal}%` : `${displayVal}%`}
                          </span>
                        </div>
                      </div>
                      <div>
                        <div className="text-[11px] font-semibold text-slate-600 leading-tight">{s.label}</div>
                        <div className="text-[9px] text-slate-400 mt-0.5">
                          {i === 0 && 'AI 与教师总分偏差 ≤2 分'}
                          {i === 1 && '单题得分完全一致'}
                          {i === 2 && '复核无需修改'}
                          {i === 3 && '复核后实际修改比例'}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Mobile */}
      <div className="flex flex-col gap-8 lg:hidden">
        <motion.div variants={fadeInLeft}>
          {data.chapter && (
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-[2px] bg-gradient-to-r from-emerald-500/80 to-teal-400/30 rounded-full" />
              <span className="text-xs font-semibold text-emerald-600/70 tracking-[0.15em] uppercase">{data.chapter}</span>
            </div>
          )}
          <h2 className="font-bold tracking-tight text-slate-800 mb-4 whitespace-pre-line" style={{ fontSize: '1.875rem', lineHeight: 1.5 }}>
            {data.title}
          </h2>
          {data.subtitle && <p className="text-base text-slate-500/80 font-medium mb-5 leading-relaxed">{data.subtitle}</p>}
        </motion.div>
        <motion.div variants={fadeInRight}>
          <div className="rounded-2xl bg-white/60 backdrop-blur-sm border border-white/50 shadow-lg p-5 text-center text-sm text-slate-500">
            图表请在桌面端查看以获得最佳体验
          </div>
        </motion.div>
      </div>
    </div>
  );
}
