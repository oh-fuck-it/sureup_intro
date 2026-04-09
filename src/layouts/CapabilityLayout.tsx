import { motion } from 'framer-motion';
import { fadeInUp, scaleIn, staggerItem } from '../hooks/useSlideAnimation';
import type { SlideData, CapabilityGroup } from '../slides/types';
import { cn } from '../lib/cn';

interface CapabilityLayoutProps {
  data: SlideData;
}

/* Apple-style muted accent per group — only used for the icon pill and left border */
const groupAccents = [
  { pill: 'bg-blue-500/10 text-blue-600', border: 'border-l-blue-400/50', dot: 'from-blue-400 to-indigo-500' },
  { pill: 'bg-emerald-500/10 text-emerald-600', border: 'border-l-emerald-400/50', dot: 'from-emerald-400 to-teal-500' },
  { pill: 'bg-violet-500/10 text-violet-600', border: 'border-l-violet-400/50', dot: 'from-violet-400 to-purple-500' },
  { pill: 'bg-amber-500/10 text-amber-600', border: 'border-l-amber-400/50', dot: 'from-amber-400 to-orange-500' },
];

function GroupCard({ group, index }: { group: CapabilityGroup; index: number }) {
  const accent = groupAccents[index % groupAccents.length];

  return (
    <motion.div variants={staggerItem} className="h-full">
      {/* Outer glass card — Apple neumorphic style */}
      <div
        className={cn(
          'h-full rounded-2xl overflow-hidden',
          'bg-white/60 backdrop-blur-2xl',
          'border border-white/50',
          'shadow-[0_2px_20px_rgba(0,0,0,0.04),0_0.5px_3px_rgba(0,0,0,0.02)]',
          'ring-1 ring-black/[0.03]',
        )}
      >
        {/* Group header */}
        <div className="px-5 pt-5 pb-3 flex items-center gap-3">
          <div className={cn('w-8 h-8 rounded-xl flex items-center justify-center text-base', accent.pill)}>
            {group.icon}
          </div>
          <h3 className="text-[0.9375rem] font-semibold text-slate-800 tracking-tight">
            {group.title}
          </h3>
        </div>

        {/* Capability items */}
        <div className="px-5 pb-5 space-y-2.5">
          {group.items.map((item, i) => (
            <div
              key={i}
              className={cn(
                'rounded-xl border-l-[2.5px] pl-3.5 pr-3 py-3',
                'bg-white/50 border border-white/60',
                'shadow-[0_1px_6px_rgba(0,0,0,0.02)]',
                accent.border,
              )}
            >
              {/* Scenario name */}
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm leading-none">{item.icon}</span>
                <span className="text-[0.8125rem] font-semibold text-slate-800 tracking-tight">
                  {item.name}
                </span>
              </div>

              {/* Roles — compact aligned rows */}
              <div className="space-y-[5px]">
                {item.roles.map((r, ri) => (
                  <div key={ri} className="flex items-baseline gap-0 text-[0.6875rem] leading-snug">
                    <span className="shrink-0 w-[3em] text-right text-slate-400 font-medium mr-2">
                      {r.role}
                    </span>
                    <span className="text-slate-500">{r.action}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function CapabilityLayout({ data }: CapabilityLayoutProps) {
  return (
    <div className="max-w-5xl mx-auto w-full">
      {/* Header */}
      <div className="text-center mb-7">
        {data.title && (
          <motion.h2
            variants={scaleIn}
            className="text-2xl sm:text-3xl lg:text-[2.25rem] font-bold tracking-tight mb-2.5 leading-tight bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 bg-clip-text text-transparent"
          >
            {data.title}
          </motion.h2>
        )}
        {data.subtitle && (
          <motion.p
            variants={fadeInUp}
            className="text-[0.8125rem] sm:text-[0.9375rem] text-slate-500/80 max-w-2xl mx-auto leading-relaxed"
          >
            {data.subtitle}
          </motion.p>
        )}
      </div>

      {/* 2x2 grid of groups */}
      <motion.div
        variants={fadeInUp}
        className="grid grid-cols-1 sm:grid-cols-2 gap-3.5"
      >
        {data.capabilityGroups?.map((group, i) => (
          <GroupCard key={i} group={group} index={i} />
        ))}
      </motion.div>

      {/* Footer note */}
      {data.body && (
        <motion.div variants={fadeInUp} className="mt-6 flex justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/60 backdrop-blur-sm border border-white/50 shadow-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-blue-400 to-emerald-400 animate-pulse" />
            <span className="text-[0.6875rem] text-slate-500/70 font-medium">
              {data.body[0]}
            </span>
          </div>
        </motion.div>
      )}
    </div>
  );
}
