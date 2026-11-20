import { useLayoutEffect, useRef } from 'react';
import { ArrowRight, BookOpen, CheckCircle2, FileText, Landmark } from 'lucide-react';
import type { Artwork, PortfolioSlide } from '../types';
import { ArtFrame } from './ArtFrame';
import { BACK_MATTER_COUNT, COURSE, GROUP_MEMBERS, PARTS, RUBRIC_CHECKLIST, SLIDES, CORE_PAGE_COUNT, compileImageCredits, compileReferences } from '../data/slidesData';
import { animateCardHover } from '../utils/animations';

export interface SlideProps {
  slide: PortfolioSlide;
  onOpenArt?: (a: Artwork, s: PortfolioSlide) => void;
  onNavigate?: (index: number) => void;
  onEnter?: () => void;
  onOpenPdf?: () => void;
  printMode?: boolean;
}

const isHeritage = (s: PortfolioSlide) => s.partNumber === 3 || s.partNumber === 4;
export const pageLabel = (s: PortfolioSlide) =>
  typeof s.pageNumber === 'number' ? `PL. ${String(s.pageNumber).padStart(2, '0')} / ${CORE_PAGE_COUNT}` : `${s.pageNumber} · BACK MATTER`;

/* ---------------- shared atoms ---------------- */
function Eyebrow({ children, terra }: { children: React.ReactNode; terra?: boolean }) {
  return <div data-anim className={`font-mono text-[9.5px] tracking-[0.25em] uppercase ${terra ? 'text-terra' : 'text-gold'}`}>{children}</div>;
}
function Title({ s, size = 34 }: { s: PortfolioSlide; size?: number }) {
  return (
    <div>
      <Eyebrow terra={isHeritage(s)}>{s.subtitle}</Eyebrow>
      <h2 data-anim className="font-serif font-semibold leading-[1.02] mt-1.5 text-ink" style={{ fontSize: size }}>
        {s.title}
      </h2>
      <div data-anim className={`h-px w-16 mt-3 ${isHeritage(s) ? 'bg-terra' : 'bg-gold'}`} />
    </div>
  );
}
function Paras({ s, size = 12 }: { s: PortfolioSlide; size?: number }) {
  return (
    <div className="space-y-2.5">
      {s.conciseExplanation.map((p, i) => (
        <p data-anim key={i} className="text-muted leading-[1.6]" style={{ fontSize: size }}>
          {p}
        </p>
      ))}
    </div>
  );
}
function Analysis({ s, compact }: { s: PortfolioSlide; compact?: boolean }) {
  const terra = isHeritage(s);
  if (!s.criticalAnalysis.content) return null;
  return (
    <aside data-anim className={`relative plaque-border bg-card/70 ${compact ? 'p-3' : 'p-3.5'} border-l-2 ${terra ? 'border-l-terra' : 'border-l-gold'}`}>
      <div className={`font-mono text-[8.5px] tracking-[0.22em] uppercase flex items-center gap-1.5 ${terra ? 'text-terra' : 'text-gold'}`}>
        <Landmark size={11} /> Curator’s Critical Analysis
      </div>
      <h4 className="font-serif text-[16px] font-semibold mt-1 leading-tight text-ink">{s.criticalAnalysis.heading}</h4>
      <p className="text-[11.2px] leading-[1.55] mt-1 text-ink/85">{s.criticalAnalysis.content}</p>
      {s.criticalAnalysis.culturalHistoricalContext && (
        <p className="text-[10.5px] leading-[1.5] mt-1.5 italic text-muted">
          <span className={`not-italic font-mono text-[8px] tracking-widest uppercase ${terra ? 'text-terra' : 'text-gold'}`}>Context — </span>
          {s.criticalAnalysis.culturalHistoricalContext}
        </p>
      )}
    </aside>
  );
}

function FitColumn({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;

    const fit = () => {
      inner.style.transform = '';
      inner.style.width = '100%';
      inner.style.minHeight = '0px';
      const availH = outer.clientHeight;
      const naturalH = inner.offsetHeight;
      if (availH <= 0) {
        inner.style.minHeight = '100%';
        return;
      }
      if (naturalH <= availH) {
        inner.style.minHeight = '100%';
        return;
      }
      let s = Math.max(0.68, Math.sqrt(availH / naturalH));
      inner.style.width = `${100 / s}%`;
      const h1 = inner.offsetHeight;
      if (h1 * s > availH) {
        s = Math.max(0.62, (availH - 2) / h1);
        inner.style.width = `${100 / s}%`;
        const h2 = inner.offsetHeight;
        if (h2 * s > availH) {
          s = Math.max(0.6, (availH - 2) / h2);
          inner.style.width = `${100 / s}%`;
        }
      }
      inner.style.minHeight = `${Math.floor(availH / s)}px`;
      inner.style.transformOrigin = 'top left';
      inner.style.transform = `scale(${s})`;
    };

    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(outer);
    if (document.fonts?.ready) {
      document.fonts.ready.then(fit).catch(() => {});
    }
    return () => ro.disconnect();
  }, [children]);

  return (
    <div ref={outerRef} className="relative flex-1 h-full min-h-0 min-w-0 overflow-hidden">
      <div ref={innerRef} className={`flex flex-col ${className}`}>
        {children}
      </div>
    </div>
  );
}

/* ---------------- layouts ---------------- */
function SingleMasterpiece({ s, open }: { s: PortfolioSlide; open: (a: Artwork) => void }) {
  return (
    <div className="grid grid-cols-[430px_1fr] gap-10 h-full">
      <div className="relative spotlight flex min-h-0">
        <ArtFrame art={s.artworks[0]} onOpen={open} className="flex-1" />
      </div>
      <FitColumn className="gap-4">
        <Title s={s} />
        <Paras s={s} />
        <div className="mt-auto"><Analysis s={s} /></div>
      </FitColumn>
    </div>
  );
}

function ComparativeSplit({ s, open }: { s: PortfolioSlide; open: (a: Artwork) => void }) {
  const [a, b] = s.artworks;
  return (
    <div className="grid grid-cols-[1fr_1fr_1.32fr] gap-6 h-full">
      {[a, b].map((art, i) =>
        art ? (
          <div key={art.id} className="flex flex-col min-h-0 gap-2">
            <ArtFrame art={art} onOpen={open} label={i === 0 ? 'A' : 'B'} variant={isHeritage(s) ? 'terra' : 'gold'} className="flex-1" />
            {art.calloutTags && (
              <div data-anim className="flex flex-wrap gap-1">
                {art.calloutTags.map((t) => (
                  <span key={t} className="font-mono text-[8.5px] px-1.5 py-0.5 plaque-border text-ink/80">{t}</span>
                ))}
              </div>
            )}
          </div>
        ) : <div key={i} />,
      )}
      <FitColumn className="gap-3">
        <Title s={s} size={30} />
        <Paras s={s} size={11.4} />
        <div className="mt-auto"><Analysis s={s} compact /></div>
      </FitColumn>
    </div>
  );
}

function DesignBreakdown({ s, open }: { s: PortfolioSlide; open: (a: Artwork) => void }) {
  const art = s.artworks[0];
  return (
    <div className="grid grid-cols-[440px_1fr] gap-9 h-full">
      <div className="spotlight flex min-h-0"><ArtFrame art={art} onOpen={open} className="flex-1" /></div>
      <FitColumn className="gap-3">
        <Title s={s} size={32} />
        <Paras s={s} size={11.6} />
        {art.calloutTags && (
          <div data-anim className="grid grid-cols-4 gap-1.5">
            {art.calloutTags.map((t, i) => (
              <div key={t} className="plaque-border px-2 py-1.5 bg-card/50 flex items-start gap-1.5">
                <span className="font-mono text-[9px] text-gold">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-[10px] leading-tight text-ink/90">{t}</span>
              </div>
            ))}
          </div>
        )}
        <div className="mt-auto"><Analysis s={s} compact /></div>
      </FitColumn>
    </div>
  );
}

function TimelineContext({ s, open }: { s: PortfolioSlide; open: (a: Artwork) => void }) {
  return (
    <div className="grid grid-rows-[265px_1fr] h-full gap-5">
      <div className="grid grid-cols-[1.25fr_1fr] gap-8 min-h-0">
        <FitColumn className="gap-2.5">
          <Title s={s} size={30} />
          <Paras s={s} size={11.2} />
        </FitColumn>
        <FitColumn className="justify-end">
          <Analysis s={s} compact />
        </FitColumn>
      </div>
      <div className="relative min-h-0">
        <div data-anim className="absolute left-0 right-0 top-0 h-px bg-gold/50" />
        <div className="grid h-full gap-4 pt-4" style={{ gridTemplateColumns: `repeat(${s.artworks.length}, minmax(0,1fr))` }}>
          {s.artworks.map((a) => (
            <div key={a.id} className="relative flex flex-col min-h-0">
              <span className="absolute -top-[19.5px] left-0 w-2 h-2 rounded-full bg-gold ring-4 ring-wall" />
              <span data-anim className="font-mono text-[9px] text-gold mb-1.5 tracking-wider truncate">{a.yearOrPeriod}</span>
              <ArtFrame art={a} onOpen={open} fit="cover" className="flex-1" variant={isHeritage(s) ? 'terra' : 'gold'} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function HeritageSpotlight({ s, open }: { s: PortfolioSlide; open: (a: Artwork) => void }) {
  const arts = s.artworks;
  const terra = isHeritage(s);
  return (
    <div className="grid grid-cols-[1fr_1.08fr] gap-9 h-full">
      <FitColumn className="gap-3.5">
        {terra && <div data-anim className="okir-band h-1.5 w-28" />}
        <Title s={s} size={32} />
        <Paras s={s} size={11.8} />
        <div className="mt-auto"><Analysis s={s} /></div>
      </FitColumn>
      <div className={`grid gap-4 min-h-0 ${arts.length >= 3 ? 'grid-cols-2 grid-rows-2' : arts.length === 2 ? 'grid-cols-2' : 'grid-cols-1'}`}>
        {arts.map((a, i) => (
          <ArtFrame key={a.id} art={a} onOpen={open} variant={terra ? 'terra' : 'gold'} fit="cover" className={arts.length === 3 && i === 0 ? 'row-span-2' : ''} />
        ))}
      </div>
    </div>
  );
}

/** Catalogue of crafts: one card per artwork with square image + Featured / Cultural Context / Significance notes. */
function CraftCatalog({ s, open }: { s: PortfolioSlide; open: (a: Artwork) => void }) {
  const arts = s.artworks;
  const cols = arts.length <= 4 ? 2 : 3;
  const isTwoByTwo = cols === 2;
  return (
    <div className="flex flex-col h-full gap-3">
      <div className="flex items-end justify-between gap-8">
        <div><div data-anim className="okir-band h-1.5 w-28 mb-2" /><Title s={s} size={28} /></div>
        <p data-anim className="text-[10.5px] text-muted max-w-[380px] leading-snug text-right">{s.conciseExplanation[0]}</p>
      </div>
      <div className="grid gap-3.5 flex-1 min-h-0" style={{ gridTemplateColumns: `repeat(${cols}, minmax(0,1fr))`, gridTemplateRows: `repeat(${Math.ceil(arts.length / cols)}, minmax(0,1fr))` }}>
        {arts.map((a) => (
          <div key={a.id} data-anim className="plaque-border bg-card/50 p-3 flex items-center min-h-0 gap-3.5 border-t-2 border-t-terra">
            <div className={`${isTwoByTwo ? 'w-[174px] h-[174px]' : 'w-[120px] h-[120px]'} aspect-square shrink-0 flex flex-col`}>
              <ArtFrame art={a} onOpen={open} variant="terra" fit="cover" showPlaque={false} className="flex-1" />
            </div>
            <FitColumn className="gap-1">
              <div className={`font-serif ${isTwoByTwo ? 'text-[16px]' : 'text-[14px]'} font-semibold leading-tight text-ink`}>{a.title}</div>
              <div className="font-mono text-[8px] tracking-wider uppercase text-terra truncate">{a.artist}</div>
              {a.notes?.map((n) => (
                <p key={n.label} className={`${isTwoByTwo ? 'text-[9.6px] leading-[1.42]' : 'text-[8.6px] leading-[1.38]'} text-ink/85`}>
                  <span className="font-mono text-[7.5px] tracking-widest uppercase text-terra">{n.label} — </span>{n.text}
                </p>
              ))}
            </FitColumn>
          </div>
        ))}
      </div>
    </div>
  );
}

function Intro({ s, open }: { s: PortfolioSlide; open: (a: Artwork) => void }) {
  return (
    <div className="grid grid-cols-[1fr_330px] gap-10 h-full">
      <FitColumn className="gap-4">
        <Title s={s} size={42} />
        <Paras s={s} size={12.2} />
        <div className="mt-auto grid grid-cols-[1fr_auto] gap-6 items-end">
          <Analysis s={s} compact />
          <div data-anim className="text-right">
            <div className="font-serif italic text-[22px] text-gold leading-none">M. C. D. Blanqueza</div>
            <div className="font-mono text-[8.5px] tracking-widest uppercase text-muted mt-1">Lead Curator · Group 2</div>
          </div>
        </div>
      </FitColumn>
      <div className="spotlight flex min-h-0"><ArtFrame art={s.artworks[0]} onOpen={open} className="flex-1" /></div>
    </div>
  );
}

function Cover({ slide: s, onEnter, onOpenPdf, printMode, open }: SlideProps & { open: (a: Artwork) => void }) {
  const art = s.artworks[0];
  return (
    <div className="absolute inset-0 grid grid-cols-[1fr_420px]">
      <div className="relative flex flex-col justify-between p-12 pr-6 z-10">
        <div>
          <Eyebrow>{COURSE.group} · Digital Art Portfolio & Interactive Exhibition</Eyebrow>
          <h1 data-anim className="font-serif font-semibold text-[74px] leading-[0.92] mt-4 text-ink">
            A Journey <br />
            <span className="italic font-normal text-gold">Through Art</span>
          </h1>
          <p data-anim className="font-serif text-[22px] leading-snug mt-3 text-ink/85 max-w-[560px]">{s.subtitle}</p>
          <div data-anim className="h-px w-24 bg-gold mt-5" />
        </div>
        <div data-anim className="grid grid-cols-[auto_1fr] gap-x-8 gap-y-1">
          <div>
            <div className="font-mono text-[8.5px] tracking-[0.22em] uppercase text-gold">Group Leader</div>
            <div className="font-serif text-[19px] text-ink leading-tight">{GROUP_MEMBERS[0].name}</div>
            <div className="font-mono text-[9px] text-muted mt-2 leading-relaxed">
              {COURSE.course}<br />{COURSE.instructor}<br />{COURSE.school} · {COURSE.term}
            </div>
          </div>
          <div>
            <div className="font-mono text-[8.5px] tracking-[0.22em] uppercase text-gold">Members · 5 Pairs</div>
            <div className="grid grid-cols-2 gap-x-4 text-[10.5px] text-ink/80 mt-1 leading-[1.55]">
              {GROUP_MEMBERS.slice(1).map((m) => (
                <div key={m.id}><span className="font-mono text-[8.5px] text-gold/80 mr-1">{m.id}</span>{m.name}</div>
              ))}
            </div>
          </div>
        </div>
        {!printMode && (
          <div data-anim className="flex gap-3">
            <button id="cover-enter-btn" onClick={onEnter} className="group flex items-center gap-2 bg-gold text-[#0d0d0f] px-5 py-2.5 text-[12px] font-semibold tracking-wide hover:brightness-110 transition">
              Enter Exhibition <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button id="cover-pdf-btn" onClick={onOpenPdf} className="flex items-center gap-2 plaque-border px-5 py-2.5 text-[12px] text-ink hover:bg-gold/10 transition">
              <FileText size={14} /> Open Full PDF
            </button>
          </div>
        )}
      </div>
      <div className="relative spotlight p-10 pl-0 flex">
        <ArtFrame art={art} onOpen={open} fit="cover" className="flex-1" />
      </div>
    </div>
  );
}

function TocCard({ p, idx, onNavigate }: { p: (typeof PARTS)[number]; idx: number; onNavigate?: (i: number) => void }) {
  const ref = useRef<HTMLButtonElement>(null);
  const terra = p.part === 3 || p.part === 4;
  return (
    <button
      ref={ref}
      data-anim
      id={`toc-wing-${p.part}`}
      onClick={() => onNavigate?.(idx)}
      onMouseEnter={() => ref.current && animateCardHover(ref.current, true)}
      onMouseLeave={() => ref.current && animateCardHover(ref.current, false)}
      className={`text-left plaque-border bg-card/60 p-4 flex flex-col gap-1.5 hover:bg-card transition-colors border-t-2 ${terra ? 'border-t-terra' : 'border-t-gold'}`}
    >
      <div className="flex justify-between items-center">
        <span className={`font-mono text-[9px] tracking-[0.22em] uppercase ${terra ? 'text-terra' : 'text-gold'}`}>{p.label}</span>
        <span className="font-mono text-[9px] text-muted">{p.range}</span>
      </div>
      <div className="font-serif text-[20px] leading-tight font-semibold text-ink">{p.title}</div>
      <div className="text-[10.5px] text-muted leading-snug">{p.blurb}</div>
      <div className="mt-auto pt-1 text-[10px] font-mono text-gold flex items-center gap-1">Enter wing <ArrowRight size={11} /></div>
    </button>
  );
}

function Toc({ slide: s, onNavigate }: SlideProps) {
  const firstIndex = (part: number) => SLIDES.findIndex((x) => x.partNumber === part);
  return (
    <div className="flex flex-col h-full gap-5">
      <div className="flex justify-between items-end">
        <Title s={s} size={40} />
        <p data-anim className="text-[11px] text-muted max-w-[380px] leading-relaxed">{s.conciseExplanation[0]}</p>
      </div>
      <div className="grid grid-cols-4 grid-rows-2 gap-3.5 flex-1 min-h-0">
        {PARTS.map((p) => <TocCard key={p.part} p={p} idx={firstIndex(p.part)} onNavigate={onNavigate} />)}
        <div data-anim className="plaque-border p-4 flex flex-col justify-center spotlight">
          <BookOpen className="text-gold" size={20} />
          <div className="font-serif text-[30px] leading-none mt-2 text-ink">{CORE_PAGE_COUNT} <span className="text-[16px] italic text-muted">core pages</span></div>
          <div className="font-mono text-[9px] text-muted mt-1">+ {BACK_MATTER_COUNT} Back Matter pages (excluded)</div>
        </div>
      </div>
    </div>
  );
}

function References({ slide: s }: SlideProps) {
  const slice = s.refSlice;
  const items = slice?.items ?? compileReferences();
  const start = (slice?.startIndex ?? 0) + 1;
  const showCredits = slice?.showCredits ?? true;
  const credits = showCredits ? compileImageCredits() : [];
  const colLen = Math.ceil(items.length / 3);
  const cols = [0, 1, 2].map((c) => ({
    offset: c * colLen,
    list: items.slice(c * colLen, (c + 1) * colLen),
  }));

  return (
    <FitColumn className="gap-2.5">
      <Title s={s} size={28} />
      {items.length > 0 && (
        <div data-anim className="grid grid-cols-3 gap-x-6 items-start">
          {cols.map((col, ci) => (
            <ol key={ci} start={start + col.offset} className="min-w-0 space-y-1.5 text-[8.1px] leading-[1.42] text-ink/85 list-none m-0 p-0">
              {col.list.map((r, i) => (
                <li key={r} className="min-w-0 break-words [overflow-wrap:anywhere] pl-4 -indent-4">
                  <span className="font-mono text-[7.5px] text-gold mr-1">{start + col.offset + i}.</span>
                  {r}
                </li>
              ))}
            </ol>
          ))}
        </div>
      )}
      {showCredits && (
        <div data-anim className="mt-auto border-t border-line pt-2">
          <div className="font-mono text-[8px] tracking-[0.22em] uppercase text-gold mb-1">Image Credits</div>
          <p className="text-[7.3px] leading-[1.45] text-muted break-words [overflow-wrap:anywhere]">
            {credits.map((c) => `${c.title} — ${c.artist} (${c.yearOrPeriod})${c.imageUrl ? ', Wikimedia Commons, public domain' : ', group photo/scan'}`).join('  ·  ')}
          </p>
        </div>
      )}
    </FitColumn>
  );
}

function Disclosure({ slide: s }: SlideProps) {
  return (
    <div className="grid grid-cols-[1.1fr_1fr] gap-10 h-full">
      <FitColumn className="gap-4">
        <Title s={s} size={32} />
        <Paras s={s} size={12} />
        <div data-anim className="plaque-border p-3 mt-auto">
          <div className="font-mono text-[8.5px] tracking-[0.22em] uppercase text-gold">Signed</div>
          <div className="font-serif italic text-[18px] text-ink">Group 2 — {GROUP_MEMBERS[0].name}, Leader</div>
        </div>
      </FitColumn>
      <FitColumn className="gap-2">
        <Eyebrow>Rubric Compliance Checklist</Eyebrow>
        {RUBRIC_CHECKLIST.map((r) => (
          <div data-anim key={r} className="flex items-start gap-2.5 plaque-border px-3 py-2 bg-card/50">
            <CheckCircle2 size={15} className="text-gold shrink-0 mt-px" />
            <span className="text-[11.5px] text-ink/90 leading-snug">{r}</span>
          </div>
        ))}
      </FitColumn>
    </div>
  );
}

function Roles({ slide: s }: SlideProps) {
  return (
    <FitColumn className="gap-3">
      <Title s={s} size={30} />
      <table data-anim className="w-full text-left border-collapse">
        <thead>
          <tr className="font-mono text-[8.5px] tracking-[0.18em] uppercase text-gold border-b border-line">
            <th className="py-1.5 pr-2 font-medium">#</th>
            <th className="py-1.5 pr-2 font-medium">Member</th>
            <th className="py-1.5 pr-2 font-medium">Role</th>
            <th className="py-1.5 pr-2 font-medium">Pages</th>
            <th className="py-1.5 pr-2 font-medium">Section</th>
            <th className="py-1.5 font-medium">Specific Contributions</th>
          </tr>
        </thead>
        <tbody>
          {GROUP_MEMBERS.map((m) => (
            <tr key={m.id} className="border-b border-line/60 align-top text-[9.6px] leading-snug">
              <td className="py-[5px] pr-2 font-mono text-gold">{m.id}</td>
              <td className="py-[5px] pr-2 font-semibold text-ink whitespace-nowrap">{m.name}</td>
              <td className="py-[5px] pr-2 text-ink/80">{m.role}</td>
              <td className="py-[5px] pr-2 font-mono text-ink/80 whitespace-nowrap">{m.pages}</td>
              <td className="py-[5px] pr-2 text-muted">{m.sections}</td>
              <td className="py-[5px] text-muted">{m.contributions}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </FitColumn>
  );
}

/* ---------------- main slide ---------------- */
export function Slide(props: SlideProps) {
  const { slide: s, onOpenArt, printMode } = props;
  const open = (a: Artwork) => onOpenArt?.(a, s);
  const terra = isHeritage(s);

  const body = (() => {
    switch (s.slideLayout) {
      case 'cover': return null;
      case 'toc': return <Toc {...props} />;
      case 'craft-catalog': return <CraftCatalog s={s} open={open} />;
      case 'intro': return <Intro s={s} open={open} />;
      case 'single-masterpiece': return <SingleMasterpiece s={s} open={open} />;
      case 'comparative-split': return <ComparativeSplit s={s} open={open} />;
      case 'design-breakdown': return <DesignBreakdown s={s} open={open} />;
      case 'timeline-context': return <TimelineContext s={s} open={open} />;
      case 'heritage-spotlight': return <HeritageSpotlight s={s} open={open} />;
      case 'references': return <References {...props} />;
      case 'disclosure': return <Disclosure {...props} />;
      case 'roles': return <Roles {...props} />;
    }
  })();

  return (
    <article className="slide-canvas grain" data-print={printMode ? 'true' : undefined} data-slide aria-label={`${pageLabel(s)} — ${s.title}`}>
      {/* ambient spotlight */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse 55% 60% at 22% 30%, ${terra ? 'rgba(184,93,59,0.10)' : 'var(--spot)'}, transparent 70%)` }} />
      {s.slideLayout === 'cover' ? (
        <Cover {...props} open={open} />
      ) : (
        <>
          <header className="absolute top-0 inset-x-0 h-10 px-10 flex items-center justify-between border-b border-line">
            <span className={`font-mono text-[9px] tracking-[0.25em] uppercase ${terra ? 'text-terra' : 'text-gold'}`}>
              {s.partNumber > 0 && s.partNumber < 6 ? `Part ${s.partNumber} · ` : ''}{s.partTitle}
            </span>
            <span className="font-serif italic text-[12px] text-muted">A Journey Through Art</span>
            <span className="font-mono text-[9.5px] tracking-widest text-ink/80">{pageLabel(s)}</span>
          </header>
          <main className="absolute inset-x-0 top-10 bottom-7 px-10 py-5">{body}</main>
          <footer className="absolute bottom-0 inset-x-0 h-7 px-10 flex items-center justify-between border-t border-line font-mono text-[8px] tracking-wider text-muted">
            <span className="truncate max-w-[560px]">Curated by {s.assignedMember}</span>
            <span className="truncate max-w-[440px]">
              {s.citations.length ? `${s.citations.length} APA source${s.citations.length > 1 ? 's' : ''} · ${s.citations[0].split('(')[0].trim()}…` : 'Group 2 · Art Appreciation'}
            </span>
          </footer>
        </>
      )}
    </article>
  );
}
