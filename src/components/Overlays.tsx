import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { ExternalLink, Grid3x3, Landmark, Quote, X, ZoomIn, ZoomOut, ChevronDown, ChevronUp, User } from 'lucide-react';
import type { Artwork, PortfolioSlide } from '../types';
import { ArtImage } from './ArtFrame';
import { PARTS, SLIDES } from '../data/slidesData';
import { animateCardsIn, animateOverlayIn } from '../utils/animations';

/* ---------- Scaled 16:9 stage (keeps 1122×631 design pixel-perfect) ---------- */
export function ScaledStage({ children, zoom = 1 }: { children: React.ReactNode; zoom?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const updateFrom = (width: number, height: number) => {
      if (width > 0 && height > 0) {
        setScale(Math.min(width / 1122, height / 631));
      }
    };
    const rect = el.getBoundingClientRect();
    updateFrom(rect.width, rect.height);
    const ro = new ResizeObserver(([e]) => updateFrom(e.contentRect.width, e.contentRect.height));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  const effectiveScale = scale * zoom;
  return (
    <div
      ref={ref}
      className={`relative w-full h-full flex ${zoom > 1 ? 'overflow-auto thin-scroll p-2' : 'overflow-hidden items-center justify-center'}`}
    >
      <div
        style={{ width: 1122 * effectiveScale, height: 631 * effectiveScale }}
        className={`relative shrink-0 shadow-[0_40px_90px_-30px_rgba(0,0,0,0.75)] ${zoom > 1 ? 'm-auto' : ''}`}
      >
        <div
          style={{ transform: `scale(${effectiveScale})`, transformOrigin: 'top left', width: 1122, height: 631 }}
          className="absolute top-0 left-0 plaque-border"
        >
          {children}
        </div>
      </div>
    </div>
  );
}

function useOverlay(onClose: () => void) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    animateOverlayIn(ref.current);
    const k = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  }, [onClose]);
  return ref;
}

/* ---------- Lightbox ---------- */
export function Lightbox({ art, slide, onClose }: { art: Artwork; slide: PortfolioSlide; onClose: () => void }) {
  const ref = useOverlay(onClose);
  const [zoom, setZoom] = useState(false);
  return (
    <div ref={ref} className="no-print fixed inset-0 z-[90] bg-black/92 backdrop-blur-sm flex overflow-hidden" role="dialog" aria-modal="true" aria-label={`Inspecting ${art.title}`}>
      <div data-panel className="flex flex-col md:flex-row w-full h-full overflow-hidden">
        <div className={`flex-1 relative ${zoom ? 'overflow-auto thin-scroll cursor-zoom-out' : 'overflow-hidden cursor-zoom-in flex items-center justify-center p-4 sm:p-8 md:p-10'}`} onClick={() => setZoom((z) => !z)}>
          <div className={zoom ? 'w-[220%] h-[220%]' : 'w-full h-full'} style={{ background: 'radial-gradient(ellipse at center, rgba(197,160,89,0.12), transparent 65%)' }}>
            <ArtImage key={art.id} art={art} />
          </div>
        </div>
        <aside className="w-full md:w-[360px] max-h-[45vh] md:max-h-full shrink-0 bg-[#121215] text-[#ede7db] border-t md:border-t-0 md:border-l border-[rgba(197,160,89,0.25)] p-5 sm:p-7 flex flex-col gap-3.5 sm:gap-4 overflow-y-auto thin-scroll">
          <div className="flex justify-between items-center">
            <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.25em] uppercase text-gold">Inspection Plaque</span>
            <button id="lightbox-close-btn" onClick={onClose} aria-label="Close" className="hover:text-gold p-1"><X size={20} /></button>
          </div>
          <h3 className="font-serif text-[22px] sm:text-[30px] leading-tight italic">{art.title}</h3>
          <div className="space-y-0.5 sm:space-y-1 font-mono text-[10px] sm:text-[11px] text-[#ede7db]/75">
            <div>{art.artist}</div>
            <div>{art.yearOrPeriod}</div>
            {art.mediumOrOrigin && <div>{art.mediumOrOrigin}</div>}
          </div>
          <p className="text-[12px] sm:text-[13px] leading-relaxed text-[#ede7db]/85">{art.caption}</p>
          {art.calloutTags && (
            <div className="flex flex-wrap gap-1.5">
              {art.calloutTags.map((t) => <span key={t} className="font-mono text-[9px] sm:text-[9.5px] px-2 py-0.5 border border-[rgba(197,160,89,0.3)]">{t}</span>)}
            </div>
          )}
          <div className="border-l-2 border-gold pl-3">
            <div className="font-mono text-[8.5px] sm:text-[9px] tracking-[0.2em] uppercase text-gold flex items-center gap-1.5"><Landmark size={11} /> Critical Notes</div>
            <div className="font-serif text-[15px] sm:text-[17px] mt-1">{slide.criticalAnalysis.heading}</div>
            <p className="text-[11px] sm:text-[12px] leading-relaxed text-[#ede7db]/75 mt-1">{slide.criticalAnalysis.content}</p>
          </div>
          <div className="mt-auto pt-2 flex gap-2">
            <button id="lightbox-zoom-btn" onClick={() => setZoom((z) => !z)} className="flex-1 flex items-center justify-center gap-2 bg-gold text-[#0d0d0f] py-2 text-[12px] font-semibold">
              {zoom ? <ZoomOut size={14} /> : <ZoomIn size={14} />} {zoom ? 'Fit' : 'Zoom 2.2×'}
            </button>
            <a id="lightbox-source-link" href={art.sourceUrl} target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-2 border border-[rgba(197,160,89,0.35)] py-2 text-[12px] hover:bg-gold/10">
              <ExternalLink size={14} /> Source
            </a>
          </div>
        </aside>
      </div>
    </div>
  );
}

/* ---------- Jump to slide grid ---------- */
export function JumpModal({ current, onJump, onClose }: { current: number; onJump: (i: number) => void; onClose: () => void }) {
  const ref = useOverlay(onClose);
  useEffect(() => animateCardsIn(ref.current), [ref]);
  return (
    <div ref={ref} className="no-print fixed inset-0 z-[80] bg-black/75 backdrop-blur-md flex items-center justify-center p-3 sm:p-6" onClick={onClose}>
      <div data-panel className="bg-wall2 plaque-border w-full max-w-[920px] max-h-[88vh] overflow-y-auto thin-scroll p-4 sm:p-7" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-4 sm:mb-5">
          <h3 className="font-serif text-[22px] sm:text-[28px] flex items-center gap-2.5 sm:gap-3"><Grid3x3 className="text-gold" size={20} /> Jump to Plate</h3>
          <button id="jump-close-btn" onClick={onClose} aria-label="Close" className="p-1 hover:text-gold"><X size={20} /></button>
        </div>
        <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
          {SLIDES.map((s, i) => (
            <button
              key={String(s.pageNumber)}
              id={`jump-slide-${s.pageNumber}`}
              data-card
              onClick={() => { onJump(i); onClose(); }}
              className={`text-left p-2 sm:p-2.5 plaque-border transition-colors hover:bg-gold/10 ${i === current ? 'bg-gold/15 border-gold ring-1 ring-gold/40' : 'bg-card/50'}`}
            >
              <div className={`font-mono text-[10.5px] sm:text-[11px] font-semibold ${s.partNumber === 3 || s.partNumber === 4 ? 'text-terra' : 'text-gold'}`}>
                {typeof s.pageNumber === 'number' ? `PL. ${String(s.pageNumber).padStart(2, '0')}` : s.pageNumber}
              </div>
              <div className="text-[10px] sm:text-[10.5px] leading-tight mt-1 line-clamp-2 text-ink/85">{s.title}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------- Chapter drawer ---------- */
export function ChapterDrawer({ current, onJump, onClose }: { current: number; onJump: (i: number) => void; onClose: () => void }) {
  const ref = useOverlay(onClose);
  useEffect(() => animateCardsIn(ref.current), [ref]);
  return (
    <div ref={ref} className="no-print fixed inset-0 z-[80] bg-black/60 backdrop-blur-sm" onClick={onClose}>
      <aside data-panel className="absolute left-0 top-0 bottom-0 w-[380px] bg-wall2 border-r border-line overflow-y-auto thin-scroll p-6" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-5">
          <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-gold">Exhibition Wings</span>
          <button id="drawer-close-btn" onClick={onClose} aria-label="Close drawer"><X size={18} /></button>
        </div>
        {PARTS.map((p) => (
          <div key={p.part} data-card className="mb-5">
            <div className="flex justify-between items-baseline border-b border-line pb-1 mb-1.5">
              <span className="font-serif text-[18px] font-semibold">{p.label}{p.part > 0 && p.part < 6 ? ` — ${p.title}` : ''}</span>
              <span className="font-mono text-[9px] text-muted">{p.range}</span>
            </div>
            {SLIDES.map((s, i) => s.partNumber === p.part && (
              <button key={String(s.pageNumber)} onClick={() => { onJump(i); onClose(); }} className={`w-full text-left flex gap-3 py-1 px-1.5 text-[12.5px] hover:bg-gold/10 ${i === current ? 'text-gold' : 'text-ink/80'}`}>
                <span className="font-mono text-[10px] w-11 shrink-0 pt-0.5 text-muted">{typeof s.pageNumber === 'number' ? `P.${String(s.pageNumber).padStart(2, '0')}` : s.pageNumber}</span>
                <span>{s.title}</span>
              </button>
            ))}
          </div>
        ))}
      </aside>
    </div>
  );
}

/* ---------- Curator's citation drawer ---------- */
export function CitationDrawer({ slide, open, onToggle }: { slide: PortfolioSlide; open: boolean; onToggle: () => void }) {
  return (
    <div className="no-print border-t border-line bg-wall2/90 backdrop-blur">
      <button id="citation-drawer-toggle" onClick={onToggle} className="w-full px-3 sm:px-5 h-9 flex items-center justify-between text-[10px] sm:text-[11px] font-mono tracking-wider text-muted hover:text-gold transition-colors">
        <span className="flex items-center gap-1.5 sm:gap-2 truncate">
          <Quote size={12} className="text-gold shrink-0" />
          <span className="truncate">CITATIONS · {slide.citations.length} APA · {slide.artworks.length} CREDITS</span>
        </span>
        <span className="flex items-center gap-1.5 sm:gap-2 shrink-0 ml-2">
          <span className="hidden md:inline truncate max-w-[200px]"><User size={12} className="inline mr-1" />{slide.assignedMember}</span>
          {open ? <ChevronDown size={14} /> : <ChevronUp size={14} />}
        </span>
      </button>
      {open && (
        <div className="px-4 sm:px-5 pb-4 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-h-[30vh] overflow-y-auto thin-scroll border-t border-line/40 pt-3">
          <div>
            <div className="font-mono text-[8.5px] sm:text-[9px] tracking-[0.2em] uppercase text-gold mb-1.5">References (APA 7th)</div>
            {slide.citations.length ? slide.citations.map((c) => <p key={c} className="text-[11px] sm:text-[12px] leading-snug mb-1.5 pl-3 sm:pl-4 -indent-3 sm:-indent-4 text-ink/85">{c}</p>) : <p className="text-[11px] sm:text-[12px] text-muted">No external sources on this page.</p>}
          </div>
          <div>
            <div className="font-mono text-[8.5px] sm:text-[9px] tracking-[0.2em] uppercase text-gold mb-1.5">Image Credits</div>
            {slide.artworks.length ? slide.artworks.map((a) => (
              <p key={a.id} className="text-[11px] sm:text-[12px] leading-snug mb-1.5 text-ink/85">
                <em>{a.title}</em> — {a.artist}, {a.yearOrPeriod}.{' '}
                <a href={a.sourceUrl} target="_blank" rel="noreferrer" className="text-gold underline underline-offset-2">Source</a>
                <span className="font-mono text-[9px] sm:text-[10px] text-muted block sm:inline"> · local: {a.localImagePath}</span>
              </p>
            )) : <p className="text-[11px] sm:text-[12px] text-muted">No images on this page.</p>}
          </div>
        </div>
      )}
    </div>
  );
}
