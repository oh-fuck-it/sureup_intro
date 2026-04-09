import { useState } from 'react';
import { cn } from '../lib/cn';
import type { ImageItem, ImageDisplay } from '../slides/types';
import { MockupFrame, PhoneTrioDisplay, ImageGrid, DuoDeviceDisplay, PhoneFanDisplay, DeviceShowcaseDisplay, AiShowcaseDisplay, PhonePairDisplay } from './MockupFrame';
import { ImageCarousel } from './ImageCarousel';
import { ImageLightbox } from './ImageLightbox';

interface SlideVisualProps {
  /** Single image URL (legacy) */
  image?: string;
  alt?: string;
  className?: string;
  aspect?: string;

  /** Multi-image support */
  images?: ImageItem[];
  imageDisplay?: ImageDisplay;
}

export function SlideVisual({
  image,
  alt = '',
  className,
  images,
  imageDisplay = 'single',
}: SlideVisualProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Multi-image mode
  if (images && images.length > 0) {
    // Carousel handles its own lightbox, caption, and arrows
    if (imageDisplay === 'carousel') {
      return <ImageCarousel images={images} className={className} />;
    }

    const hasViewableImages = images.some(img => img.src);

    // Grid mode: each image individually clickable
    if (imageDisplay === 'grid') {
      return (
        <>
          <ImageGrid
            images={images}
            className={className}
            onImageClick={hasViewableImages ? (i) => setLightboxIndex(i) : undefined}
          />
          {lightboxIndex !== null && (
            <ImageLightbox
              images={images}
              initialIndex={lightboxIndex}
              onClose={() => setLightboxIndex(null)}
            />
          )}
        </>
      );
    }

    // All other composite modes: click anywhere to open lightbox on first image
    const display = (() => {
      switch (imageDisplay) {
        case 'phone-trio':
          return <PhoneTrioDisplay images={images} className={className} />;
        case 'duo-device':
          return <DuoDeviceDisplay images={images} className={className} />;
        case 'phone-fan':
          return <PhoneFanDisplay images={images} className={className} />;
        case 'device-showcase':
          return <DeviceShowcaseDisplay images={images} className={className} />;
        case 'ai-showcase':
          return <AiShowcaseDisplay images={images} className={className} />;
        case 'phone-pair':
          return <PhonePairDisplay images={images} className={className} />;
        default:
          return <MockupFrame item={images[0]!} className={cn('w-full', className)} />;
      }
    })();

    return (
      <>
        <div
          className={cn('w-full', hasViewableImages && 'cursor-pointer group/visual')}
          onClick={() => hasViewableImages && setLightboxIndex(0)}
        >
          {display}
          {/* Zoom hint */}
          {hasViewableImages && (
            <div className="flex items-center justify-center mt-2 opacity-0 group-hover/visual:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100/80 backdrop-blur-sm">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  <line x1="11" y1="8" x2="11" y2="14" />
                  <line x1="8" y1="11" x2="14" y2="11" />
                </svg>
                <span className="text-[11px] text-slate-400 font-medium">点击查看大图</span>
              </div>
            </div>
          )}
        </div>
        {lightboxIndex !== null && (
          <ImageLightbox
            images={images}
            initialIndex={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
          />
        )}
      </>
    );
  }

  // Legacy single image or placeholder
  const item: ImageItem = { src: image, alt, frame: 'none' };
  if (!image) {
    delete item.frame;
  }
  return <MockupFrame item={item} className={cn('w-full', className)} />;
}
