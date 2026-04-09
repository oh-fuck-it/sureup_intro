export type LayoutType =
  | 'cover'
  | 'breath'
  | 'content'
  | 'text'
  | 'table'
  | 'case'
  | 'cta'
  | 'gallery'
  | 'timeline'
  | 'stats'
  | 'compare'
  | 'feature-grid'
  | 'capability'
  | 'policy'
  | 'contrast'
  | 'wechat-bubble'
  | 'screenshot-showcase'
  | 'feature-cards'
  | 'wechat-combined'
  | 'grading-chart'
  | 'intro'
  | 'ai-assistant';

export type SlideBg =
  | 'default'
  | 'white'
  | 'warm'
  | 'deep'
  | 'mint'
  | 'lavender'
  | 'peach'
  | 'ocean'
  | 'sunset'
  | 'frost';

export type OrbColor =
  | 'blue'
  | 'violet'
  | 'cyan'
  | 'indigo'
  | 'rose'
  | 'emerald'
  | 'amber'
  | 'sky'
  | 'fuchsia'
  | 'teal'
  | 'orange'
  | 'lime';

export interface OrbConfig {
  color: OrbColor;
  size: number;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  opacity?: number;
  /** blur override in px, default 80 */
  blur?: number;
}

export interface HighlightItem {
  label: string;
  value?: string;
  description?: string;
}

export interface GalleryItem {
  image: string;
  caption?: string;
  /** Visually highlight this card as a key differentiator */
  featured?: boolean;
}

export interface ImageItem {
  /** URL or empty for placeholder */
  src?: string;
  /** Video URL — if set, renders a looping video instead of an image */
  video?: string;
  alt: string;
  /** Device frame style */
  frame?: 'desktop' | 'mobile' | 'chat' | 'none';
  /** Caption shown below image */
  caption?: string;
}

export type ImageDisplay = 'single' | 'carousel' | 'grid' | 'phone-trio' | 'duo-device' | 'phone-fan' | 'device-showcase' | 'ai-showcase' | 'phone-pair';

export interface TimelineItem {
  date: string;
  title: string;
  description?: string;
}

export interface CompareData {
  left: { label: string; title: string; items: string[] };
  right: { label: string; title: string; items: string[] };
}

export interface FeatureItem {
  icon?: string;
  title: string;
  description: string;
}

export interface RoleAction {
  role: string;
  action: string;
}

export interface CapabilityItem {
  icon: string;
  name: string;
  roles: RoleAction[];
}

export interface CapabilityGroup {
  title: string;
  icon: string;
  items: CapabilityItem[];
}

export interface SlideData {
  id: string;
  layout: LayoutType;
  chapter?: string;
  chapterIndex?: number;
  bg?: SlideBg;

  title?: string;
  subtitle?: string;
  body?: string[];
  quote?: string;
  quoteAuthor?: string;

  image?: string;
  imageAlt?: string;
  imagePosition?: 'left' | 'right';

  /** Multiple images with display mode */
  images?: ImageItem[];
  imageDisplay?: ImageDisplay;

  tableHeaders?: string[];
  tableRows?: string[][];

  highlights?: HighlightItem[];

  ctaText?: string;
  contactInfo?: Array<{ label: string; value: string }>;

  gallery?: GalleryItem[];
  timeline?: TimelineItem[];
  compare?: CompareData;
  features?: FeatureItem[];

  capabilityGroups?: CapabilityGroup[];

  orbs?: OrbConfig[];
}
