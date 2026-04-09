import { SlideContainer } from './components/SlideContainer';
import { Slide } from './components/Slide';
import { slides } from './slides/data';

import { CoverLayout } from './layouts/CoverLayout';
import { BreathLayout } from './layouts/BreathLayout';
import { ContentLayout } from './layouts/ContentLayout';
import { TextLayout } from './layouts/TextLayout';
import { TableLayout } from './layouts/TableLayout';
import { CapabilityLayout } from './layouts/CapabilityLayout';
import { CaseLayout } from './layouts/CaseLayout';
import { CTALayout } from './layouts/CTALayout';
import { GalleryLayout } from './layouts/GalleryLayout';
import { TimelineLayout } from './layouts/TimelineLayout';
import { StatsLayout } from './layouts/StatsLayout';
import { CompareLayout } from './layouts/CompareLayout';
import { FeatureGridLayout } from './layouts/FeatureGridLayout';
import { PolicyLayout } from './layouts/PolicyLayout';
import { ContrastLayout } from './layouts/ContrastLayout';
import { WechatBubbleLayout } from './layouts/WechatBubbleLayout';
import { ScreenshotShowcaseLayout } from './layouts/ScreenshotShowcaseLayout';
import { FeatureCardsLayout } from './layouts/FeatureCardsLayout';
import { WechatCombinedLayout } from './layouts/WechatCombinedLayout';
import { GradingChartLayout } from './layouts/GradingChartLayout';
import { IntroLayout } from './layouts/IntroLayout';
import { AiAssistantLayout } from './layouts/AiAssistantLayout';

import type { SlideData } from './slides/types';

const layoutMap: Record<string, React.FC<{ data: SlideData }>> = {
  cover: CoverLayout,
  breath: BreathLayout,
  content: ContentLayout,
  text: TextLayout,
  table: TableLayout,
  capability: CapabilityLayout,
  case: CaseLayout,
  cta: CTALayout,
  gallery: GalleryLayout,
  timeline: TimelineLayout,
  stats: StatsLayout,
  compare: CompareLayout,
  'feature-grid': FeatureGridLayout,
  policy: PolicyLayout,
  contrast: ContrastLayout,
  'wechat-bubble': WechatBubbleLayout,
  'screenshot-showcase': ScreenshotShowcaseLayout,
  'feature-cards': FeatureCardsLayout,
  'wechat-combined': WechatCombinedLayout,
  'grading-chart': GradingChartLayout,
  intro: IntroLayout,
  'ai-assistant': AiAssistantLayout,
};

export default function App() {
  return (
    <SlideContainer slides={slides}>
      {slides.map((slide, i) => {
        const Layout = layoutMap[slide.layout];
        if (!Layout) return null;

        return (
          <Slide key={slide.id} data={slide} index={i}>
            <Layout data={slide} />
          </Slide>
        );
      })}
    </SlideContainer>
  );
}
