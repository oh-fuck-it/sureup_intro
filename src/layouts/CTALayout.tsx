import { motion } from 'framer-motion';
import { scaleIn, fadeInUp, staggerItem } from '../hooks/useSlideAnimation';
import type { SlideData } from '../slides/types';
import { GlassPanel } from '../components/GlassPanel';
import { Mail, Phone, Globe, BookHeart } from 'lucide-react';

interface CTALayoutProps {
  data: SlideData;
}

const iconMap: Record<string, React.ReactNode> = {
  email: <Mail className="w-5 h-5" />,
  phone: <Phone className="w-5 h-5" />,
  website: <Globe className="w-5 h-5" />,
  小红书: <BookHeart className="w-5 h-5" />,
};

export function CTALayout({ data }: CTALayoutProps) {
  return (
    <div className="max-w-3xl mx-auto w-full flex flex-col items-center text-center">
      {/* SureUp Logo */}
      <motion.div variants={fadeInUp} className="mb-6">
        <img
          src="/images/logo-platform.png"
          alt="SureUp"
          className="w-14 h-14"
        />
      </motion.div>

      <motion.h2
        variants={scaleIn}
        className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tighter text-gradient-emerald mb-3 leading-tight"
      >
        {data.title}
      </motion.h2>

      {data.subtitle && (
        <motion.p
          variants={fadeInUp}
          className="text-base sm:text-lg lg:text-xl text-slate-500/70 mb-8 max-w-xl leading-relaxed"
        >
          {data.subtitle}
        </motion.p>
      )}

      {data.ctaText && (
        <motion.button
          variants={fadeInUp}
          className="mb-10 px-8 py-3.5 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-600 text-white font-semibold text-base shadow-lg shadow-teal-500/15 hover:shadow-xl hover:shadow-teal-500/25 hover:-translate-y-0.5 transition-all duration-300"
        >
          {data.ctaText}
        </motion.button>
      )}

      {data.contactInfo && (
        <motion.div variants={fadeInUp} className="w-full">
          <GlassPanel className="p-5 sm:p-7">
            <div className="grid sm:grid-cols-2 gap-3.5">
              {data.contactInfo.map((c, i) => (
                <motion.div
                  key={i}
                  variants={staggerItem}
                  className="flex items-center gap-3 text-left group"
                >
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-teal-50 to-emerald-50 flex items-center justify-center text-teal-500/70 shrink-0 group-hover:shadow-sm transition-shadow duration-200">
                    {iconMap[c.label.toLowerCase()] ?? <Globe className="w-5 h-5" />}
                  </div>
                  <div>
                    <div className="text-[0.6875rem] text-slate-400/70 font-medium uppercase tracking-wider">{c.label}</div>
                    <div className="text-sm sm:text-[0.9375rem] text-slate-700 font-medium">
                      {c.value}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </GlassPanel>
        </motion.div>
      )}

      {/* Logos */}
      <motion.div
        variants={fadeInUp}
        className="mt-8 flex items-center gap-3.5"
      >
        <img
          src="/images/logo-platform.png"
          alt="稳了"
          className="w-7 h-7 opacity-35"
        />
        <div className="w-px h-5 bg-slate-200/60" />
        <img
          src="/images/logo-company.png"
          alt="DelveTech"
          className="h-4 w-auto opacity-30"
        />
      </motion.div>

      <motion.p
        variants={fadeInUp}
        className="mt-3 text-xs text-slate-300/70 tracking-wide"
      >
        © {new Date().getFullYear()} DelveTech · 稳了 校园智能教·评·管·育一体化平台
      </motion.p>
    </div>
  );
}
