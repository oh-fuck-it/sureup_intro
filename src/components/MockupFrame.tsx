import { cn } from '../lib/cn';
import type { ImageItem } from '../slides/types';
import {
  Monitor,
  Smartphone,
  MessageCircle,
  Layout,
  FileText,
  BarChart3,
  Shield,
  Image,
} from 'lucide-react';

function getContextIcon(alt: string) {
  const t = alt.toLowerCase();
  if (t.includes('小程序') || t.includes('手机') || t.includes('微信') || t.includes('家长')) return Smartphone;
  if (t.includes('驾驶舱') || t.includes('看板') || t.includes('总览')) return Layout;
  if (t.includes('报表') || t.includes('报告') || t.includes('档案') || t.includes('文档') || t.includes('评价')) return FileText;
  if (t.includes('成绩') || t.includes('分析') || t.includes('图表') || t.includes('趋势') || t.includes('积分')) return BarChart3;
  if (t.includes('预警') || t.includes('安全')) return Shield;
  if (t.includes('助手') || t.includes('对话') || t.includes('聊天')) return MessageCircle;
  if (t.includes('截图') || t.includes('效果图') || t.includes('界面')) return Monitor;
  return Image;
}

interface MockupFrameProps {
  item: ImageItem;
  className?: string;
}

export function MockupFrame({ item, className }: MockupFrameProps) {
  // Video
  if (item.video) {
    // Desktop frame with browser chrome
    if (item.frame === 'desktop') {
      return (
        <div className={cn(
          'rounded-xl overflow-hidden',
          'shadow-2xl shadow-slate-900/10 ring-1 ring-black/[0.06]',
          'bg-white',
          className,
        )}>
          {/* Our browser chrome — covers the original browser UI in the video */}
          <div className="relative z-10 bg-gradient-to-b from-slate-100 to-slate-50 px-4 py-2.5 flex items-center gap-3">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
            </div>
            <div className="flex-1 flex justify-center">
              <div className="bg-white/80 rounded-md px-12 py-1 text-[10px] text-slate-400 font-medium tracking-wide border border-slate-200/60">
                sureup.cn
              </div>
            </div>
            <div className="w-[52px]" />
          </div>
          {/* Video: block element with negative margins, container overflow:hidden crops all edges */}
          <div className="relative overflow-hidden" style={{ aspectRatio: '16/8' }}>
            <video
              src={item.video}
              autoPlay
              loop
              muted
              playsInline
              className="absolute top-0 left-0"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: '45% 30%',
                transform: 'scale(1.1) translateY(-6.1%)', // scale放大裁四边，translateY负值裁顶部
                // scale: 整体放大比例，越大裁四边越多
                // translateY: 负值往上移裁顶部（原始浏览器栏），正值裁底部
                // translateX: 负值往左移裁左侧，正值裁右侧
              }}
            />
          </div>
        </div>
      );
    }
    // Default: simple rounded frame
    return (
      <div className={cn(
        'rounded-2xl overflow-hidden',
        'shadow-lg shadow-slate-900/[0.06] ring-1 ring-black/[0.04]',
        className,
      )}>
        <video
          src={item.video}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto block"
        />
      </div>
    );
  }

  // Real image
  if (item.src) {
    return (
      <div className={cn(
        'rounded-2xl overflow-hidden',
        'shadow-lg shadow-slate-900/[0.06] ring-1 ring-black/[0.04]',
        className,
      )}>
        <img
          src={item.src}
          alt={item.alt}
          className="w-full h-auto object-cover"
          loading="lazy"
        />
      </div>
    );
  }

  // Placeholder
  const Icon = getContextIcon(item.alt);

  return (
    <div
      className={cn(
        'rounded-2xl overflow-hidden',
        'bg-gradient-to-br from-slate-50/90 via-white/80 to-blue-50/40',
        'border border-slate-200/30',
        'shadow-sm',
        'flex items-center justify-center',
        className,
      )}
      style={{ aspectRatio: '16/10' }}
    >
      <div className="text-center p-4 max-w-[85%]">
        <div className="w-11 h-11 mx-auto mb-2.5 rounded-xl bg-gradient-to-br from-blue-100/70 to-indigo-100/50 flex items-center justify-center">
          <Icon className="w-5 h-5 text-blue-400/60" />
        </div>
        <p className="text-[11px] text-slate-400/70 font-medium leading-relaxed line-clamp-2">
          {item.alt || '效果图占位'}
        </p>
      </div>
    </div>
  );
}

/* ──────── Duo Device (Desktop + Mobile overlay) ──────── */

export function DuoDeviceDisplay({ images, className }: { images: ImageItem[]; className?: string }) {
  const mobileImg = images.find(i => i.frame === 'mobile') || images[0]!;
  const desktopImg = images.find(i => i.frame === 'desktop') || images[1]!;

  return (
    <div className={cn('relative w-full', className)}>
      {/* Desktop — main visual with browser chrome */}
      <div className="relative w-[88%] rounded-xl overflow-hidden shadow-2xl shadow-slate-900/10 ring-1 ring-black/[0.06]">
        <div className="bg-gradient-to-b from-slate-100 to-slate-50 px-4 py-2.5 flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="bg-white/80 rounded-md px-12 py-1 text-[10px] text-slate-400 font-medium tracking-wide border border-slate-200/60">
              sureup.cn
            </div>
          </div>
          <div className="w-[52px]" />
        </div>
        {desktopImg.video ? (
          <video src={desktopImg.video} autoPlay loop muted playsInline className="w-full h-auto block" />
        ) : desktopImg.src ? (
          <img src={desktopImg.src} alt={desktopImg.alt} className="w-full h-auto block" loading="lazy" />
        ) : (
          <div className="aspect-[16/10] bg-gradient-to-br from-slate-50 to-blue-50/30 flex items-center justify-center">
            <p className="text-xs text-slate-400">{desktopImg.alt}</p>
          </div>
        )}
      </div>

      {/* Mobile — floating phone overlay */}
      <div className="absolute -right-1 bottom-[2%] w-[26%] max-w-[180px] z-10">
        <div className="bg-slate-800 rounded-[1.75rem] p-[3px] shadow-2xl shadow-slate-900/20 ring-1 ring-white/10">
          {/* Notch */}
          <div className="absolute top-[3px] left-1/2 -translate-x-1/2 w-[35%] h-[14px] bg-slate-800 rounded-b-xl z-20" />
          <div className="rounded-[1.6rem] overflow-hidden bg-white">
            {mobileImg.src ? (
              <img src={mobileImg.src} alt={mobileImg.alt} className="w-full h-auto block" loading="lazy" />
            ) : (
              <div className="aspect-[9/19] bg-gradient-to-br from-slate-50 to-blue-50/30 flex items-center justify-center">
                <p className="text-[9px] text-slate-400 px-2 text-center">{mobileImg.alt}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ──────── Device Showcase (Desktop + multi-phone fan overlay) ──────── */

export function DeviceShowcaseDisplay({ images, className }: { images: ImageItem[]; className?: string }) {
  const desktopImg = images.find(i => i.frame === 'desktop');
  const mobileImgs = images.filter(i => i.frame === 'mobile');

  const miniFanStyles: React.CSSProperties[] = [
    { transform: 'rotate(-8deg) translateY(6px)', zIndex: 1, filter: 'brightness(0.96)' },
    { transform: 'rotate(0deg)', zIndex: 3 },
    { transform: 'rotate(8deg) translateY(6px)', zIndex: 1, filter: 'brightness(0.96)' },
  ];

  return (
    <div className={cn('relative w-full', className)}>
      {/* Desktop — main visual with browser chrome */}
      {desktopImg && (
        <div className="relative w-[85%] rounded-xl overflow-hidden shadow-2xl shadow-slate-900/10 ring-1 ring-black/[0.06]">
          <div className="bg-gradient-to-b from-slate-100 to-slate-50 px-4 py-2.5 flex items-center gap-3">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
            </div>
            <div className="flex-1 flex justify-center">
              <div className="bg-white/80 rounded-md px-12 py-1 text-[10px] text-slate-400 font-medium tracking-wide border border-slate-200/60">
                sureup.cn
              </div>
            </div>
            <div className="w-[52px]" />
          </div>
          {desktopImg.src ? (
            <img src={desktopImg.src} alt={desktopImg.alt} className="w-full h-auto block" loading="lazy" />
          ) : (
            <div className="aspect-[16/10] bg-gradient-to-br from-slate-50 to-blue-50/30 flex items-center justify-center">
              <p className="text-xs text-slate-400">{desktopImg.alt}</p>
            </div>
          )}
        </div>
      )}

      {/* Phone fan — floating overlay at bottom-right */}
      {mobileImgs.length > 0 && (
        <div className="absolute -right-3 bottom-[-4%] z-10 flex items-end">
          {mobileImgs.slice(0, 3).map((img, i) => (
            <div
              key={i}
              className={cn(
                'w-[clamp(110px,20vw,195px)] shrink-0',
                i !== 0 && '-ml-5 lg:-ml-8',
              )}
              style={miniFanStyles[i]}
            >
              <PhoneFrame src={img.src} alt={img.alt} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ──────── Phone Fan (3 phones, cascade/fan layout) ──────── */

function PhoneFrame({ src, alt }: { src?: string; alt: string }) {
  return (
    <div className="bg-gradient-to-b from-slate-700 to-slate-900 rounded-[2rem] p-[3px] shadow-2xl shadow-slate-900/25 ring-1 ring-white/[0.08]">
      <div className="relative rounded-[1.8rem] overflow-hidden bg-white">
        <div className="absolute top-[6px] left-1/2 -translate-x-1/2 w-[30%] h-[16px] bg-black rounded-full z-20" />
        {src ? (
          <img src={src} alt={alt} className="w-full h-auto block" loading="lazy" />
        ) : (
          <div className="aspect-[9/19] bg-gradient-to-br from-slate-50 to-blue-50/30 flex items-center justify-center">
            <p className="text-[9px] text-slate-400 px-3 text-center">{alt}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export function PhoneFanDisplay({ images, className }: { images: ImageItem[]; className?: string }) {
  const items = images.slice(0, 3);

  const fanStyles: React.CSSProperties[] = [
    { transform: 'rotate(-7deg) translateY(12px)', zIndex: 1, filter: 'brightness(0.97)' },
    { transform: 'rotate(0deg)', zIndex: 3 },
    { transform: 'rotate(7deg) translateY(12px)', zIndex: 1, filter: 'brightness(0.97)' },
  ];

  return (
    <div className={cn('flex items-end justify-center', className)}>
      {items.map((img, i) => (
        <div
          key={i}
          className={cn(
            'w-[clamp(120px,30%,180px)] shrink-0 transition-transform duration-500',
            i !== 0 && '-ml-5 lg:-ml-7',
          )}
          style={fanStyles[i]}
        >
          <PhoneFrame src={img.src} alt={img.alt} />
        </div>
      ))}
    </div>
  );
}

/* ──────── Phone Pair (side by side with labels) ──────── */

export function PhonePairDisplay({ images, className }: { images: ImageItem[]; className?: string }) {
  const items = images.slice(0, 2);

  return (
    <div className={cn('flex items-start justify-center gap-6 lg:gap-8', className)}>
      {items.map((img, i) => (
        <div key={i} className="flex flex-col items-center gap-2.5 w-[clamp(160px,42%,260px)]">
          <PhoneFrame src={img.src} alt={img.alt} />
          <span className="text-[13px] font-semibold text-slate-500/80 tracking-wider">
            {img.alt}
          </span>
        </div>
      ))}
    </div>
  );
}

/* ──────── Phone Trio ──────── */

export function PhoneTrioDisplay({ images, className }: { images: ImageItem[]; className?: string }) {
  const items = images.slice(0, 3);
  return (
    <div className={cn('flex items-end justify-center gap-3', className)}>
      {items.map((img, i) => (
        <div
          key={i}
          style={{
            transform: `rotate(${(i - 1) * 3}deg)`,
            marginTop: i === 1 ? 0 : 12,
          }}
        >
          <MockupFrame item={img} className={cn(i === 1 ? 'w-[170px]' : 'w-[150px]')} />
        </div>
      ))}
    </div>
  );
}

/* ──────── AI Showcase (Desktop hero + Phone overlay + Wide banner) ──────── */

export function AiShowcaseDisplay({ images, className }: { images: ImageItem[]; className?: string }) {
  // images[0] = phone (tall), images[1] = desktop, images[2] = wide banner
  const phone = images[0];
  const desktop = images[1];
  const banner = images[2];

  return (
    <div className={cn('relative w-full', className)} style={{ aspectRatio: '4/3' }}>
      {/* Desktop — main card, top-left */}
      {desktop && (
        <div className="absolute top-0 left-0 w-[72%] z-10">
          <div className="rounded-2xl overflow-hidden shadow-2xl shadow-slate-900/[0.12] ring-1 ring-black/[0.06] bg-white">
            {/* Browser chrome bar */}
            <div className="bg-gradient-to-b from-slate-100 to-slate-50/80 px-4 py-2 flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="bg-white/80 rounded-md px-10 py-0.5 text-[9px] text-slate-400 font-medium tracking-wide border border-slate-200/50">
                  SureUp AI 助手
                </div>
              </div>
              <div className="w-10" />
            </div>
            {desktop.src ? (
              <img src={desktop.src} alt={desktop.alt} className="w-full h-auto block" loading="lazy" />
            ) : (
              <div className="aspect-[16/10] bg-gradient-to-br from-slate-50 to-blue-50/30 flex items-center justify-center">
                <p className="text-xs text-slate-400">{desktop.alt}</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Phone — right side, vertically centered, top layer */}
      {phone && (
        <div className="absolute right-0 top-[4%] w-[30%] max-w-[200px] z-40">
          <div className="bg-gradient-to-b from-slate-700 to-slate-900 rounded-[2rem] p-[3px] shadow-2xl shadow-slate-900/25 ring-1 ring-white/[0.08]">
            <div className="relative rounded-[1.85rem] overflow-hidden bg-white">
              {/* Dynamic Island notch */}
              <div className="absolute top-[6px] left-1/2 -translate-x-1/2 w-[28%] h-[14px] bg-black rounded-full z-20" />
              {phone.src ? (
                <img src={phone.src} alt={phone.alt} className="w-full h-auto block" loading="lazy" />
              ) : (
                <div className="aspect-[9/19] bg-gradient-to-br from-slate-50 to-blue-50/30 flex items-center justify-center">
                  <p className="text-[9px] text-slate-400 px-3 text-center">{phone.alt}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Wide banner — bottom, overlapping both, floating card with browser chrome */}
      {banner && (
        <div className="absolute bottom-0 left-[8%] right-[6%] z-30">
          <div className="rounded-xl overflow-hidden shadow-2xl shadow-slate-900/[0.14] ring-1 ring-black/[0.05] bg-white">
            <div className="bg-gradient-to-b from-slate-100 to-slate-50/80 px-4 py-2 flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="bg-white/80 rounded-md px-10 py-0.5 text-[9px] text-slate-400 font-medium tracking-wide border border-slate-200/50">
                  SureUp AI 助手
                </div>
              </div>
              <div className="w-10" />
            </div>
            {banner.src ? (
              <img src={banner.src} alt={banner.alt} className="w-full h-auto block" loading="lazy" />
            ) : (
              <div className="aspect-[3/1] bg-gradient-to-br from-slate-50 to-blue-50/30 flex items-center justify-center">
                <p className="text-xs text-slate-400">{banner.alt}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

/* ──────── Image Grid ──────── */

export function ImageGrid({ images, className, onImageClick }: { images: ImageItem[]; className?: string; onImageClick?: (index: number) => void }) {
  const count = images.length;
  const colsClass = count === 2 ? 'grid-cols-2' : count === 3 ? 'grid-cols-3' : 'grid-cols-2 lg:grid-cols-3';

  return (
    <div className={cn('grid gap-3', colsClass, className)}>
      {images.map((img, i) => (
        <div
          key={i}
          className={cn(
            'group/grid-item',
            onImageClick && img.src && 'cursor-pointer',
          )}
          onClick={() => onImageClick && img.src && onImageClick(i)}
        >
          <MockupFrame item={img} />
          {img.caption && (
            <p className="text-center text-xs text-slate-500/70 mt-1.5 font-medium leading-snug">
              {img.caption}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
