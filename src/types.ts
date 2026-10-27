/** Core pages are numbered 1–33. Back Matter uses string IDs (excluded from the 20–40 page count). */
export type PageId = number | 'REF-1' | 'REF-2' | 'ROLES';

/** 0 = Front Matter, 1–5 = Required Parts, 6 = Back Matter & PDF Archive */
export type PartNumber = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export type SlideLayout =
  | 'cover'
  | 'toc'
  | 'intro'
  | 'single-masterpiece'
  | 'comparative-split'
  | 'design-breakdown'
  | 'timeline-context'
  | 'heritage-spotlight'
  // Back Matter layouts
  | 'references'
  | 'disclosure'
  | 'roles';

export interface Artwork {
  id: string;
  title: string;
  artist: string;
  yearOrPeriod: string;
  mediumOrOrigin?: string;
  /** Remote URL (e.g. Wikimedia Commons). Leave '' if you only have a local file. */
  imageUrl: string;
  /** Local file in /public (auto-assigned, e.g. /images/Part1_Slide4.jpg). Tried FIRST if present. */
  localImagePath?: string;
  caption: string;
  sourceUrl: string;
  calloutTags?: string[];
}

export interface CriticalAnalysis {
  heading: string;
  content: string;
  culturalHistoricalContext?: string;
}

export interface PortfolioSlide {
  pageNumber: PageId;
  partNumber: PartNumber;
  partTitle: string;
  slideLayout: SlideLayout;
  title: string;
  subtitle: string;
  assignedMember: string;
  conciseExplanation: string[];
  criticalAnalysis: CriticalAnalysis;
  artworks: Artwork[];
  citations: string[];
}

export interface GroupMember {
  id: string;
  name: string;
  role: string;
  pair: string;
  pages: string;
  sections: string;
  contributions: string;
}

export interface PartMeta {
  part: PartNumber;
  label: string;
  title: string;
  range: string;
  blurb: string;
}
