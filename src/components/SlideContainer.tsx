import { useSlideScroll } from '../hooks/useSlideScroll';
import { SlideNav } from './SlideNav';
import { ChapterIndicator } from './ChapterIndicator';
import type { SlideData } from '../slides/types';

interface SlideContainerProps {
  slides: SlideData[];
  children: React.ReactNode;
}

export function SlideContainer({ slides, children }: SlideContainerProps) {
  const { containerRef, currentIndex, goTo } = useSlideScroll(slides.length);

  const currentChapter = slides[currentIndex]?.chapter;

  return (
    <div className="relative">
      <ChapterIndicator
        chapter={currentChapter}
        current={currentIndex}
        total={slides.length}
      />

      <div ref={containerRef} className="slide-container">
        {children}
      </div>

      <SlideNav
        total={slides.length}
        current={currentIndex}
        slides={slides}
        onNavigate={goTo}
      />
    </div>
  );
}
