import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, FileText, Grid3x3, Maximize2, Menu, Minimize2, Moon, Printer, Sparkles, Sun, ZoomIn } from 'lucide-react';
import type { Artwork, PortfolioSlide } from './types';
import { BACK_MATTER_COUNT, CORE_PAGE_COUNT, PARTS, SLIDES } from './data/slidesData';
import { Slide } from './components/Slide';
import { ChapterDrawer, CitationDrawer, JumpModal, Lightbox, ScaledStage } from './components/Overlays';
import { PdfHub } from './components/PdfHub';
import { animateCounter, animateFrameReveal, animateProgress, animateSlideIn } from './utils/animations';

type Mode = 'exhibit' | 'pdf' | 'print';

export default function App() {
  const [mode, setMode] = useState<Mode>(() => {
    const p = new URLSearchParams(window.location.search).get('mode');
    return p === 'print' || p === 'pdf' || p === 'exhibit' ? p : 'exhibit';
  });
  const [index, setIndex] = useState(0);
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const t = new URLSearchParams(window.location.search).get('theme');
    if (t === 'dark' || t === 'light') return t;
    return (localStorage.getItem('g2-theme') as 'dark' | 'light') || 'dark';
  });
  const [lightbox, setLightbox] = useState<{ art: Artwork; slide: PortfolioSlide } | null>(null);
  const [jumpOpen, setJumpOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [citeOpen, setCiteOpen] = useState(false);
  const [slideExpanded, setSlideExpanded] = useState(false);
  const [slideZoom, setSlideZoom] = useState<number>(1);

  const stageRef = useRef<HTMLDivElement>(null);
  const expandedStageRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const prevIndex = useRef(0);

  const slide = SLIDES[index];
  const isCore = typeof slide.pageNumber === 'number';

  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light');
    localStorage.setItem('g2-theme', theme);
  }, [theme]);

  const go = useCallback((i: number) => setIndex(Math.max(0, Math.min(SLIDES.length - 1, i))), []);
  const closeExpanded = useCallback(() => {
    setSlideExpanded(false);
    setSlideZoom(1);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const k = (e: KeyboardEvent) => {
      if (mode !== 'exhibit' || lightbox || jumpOpen || drawerOpen) return;
      if (e.key === 'Escape' && slideExpanded) {
        closeExpanded();
        return;
      }
      if (e.key === 'ArrowRight' || e.key === 'PageDown') go(index + 1);
      if (e.key === 'ArrowLeft' || e.key === 'PageUp') go(index - 1);
      if (e.key === 'Home') go(0);
      if (e.key === 'End') go(SLIDES.length - 1);
    };
    window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  }, [mode, index, lightbox, jumpOpen, drawerOpen, slideExpanded, closeExpanded, go]);

  // Synchronous pre-paint transition animation to eliminate flash/glitch on Next/Prev
  useLayoutEffect(() => {
    if (mode !== 'exhibit') return;
    const targetEl = slideExpanded ? expandedStageRef.current : stageRef.current;
    animateSlideIn(targetEl);
    animateFrameReveal(targetEl);
    const from = typeof SLIDES[prevIndex.current]?.pageNumber === 'number' ? (SLIDES[prevIndex.current].pageNumber as number) : CORE_PAGE_COUNT;
    if (isCore) animateCounter(counterRef.current, from, slide.pageNumber as number);
    animateProgress(progressRef.current, ((index + 1) / SLIDES.length) * 100);
    prevIndex.current = index;
  }, [index, mode, slideExpanded, isCore, slide.pageNumber]);

  const openArt = useCallback((art: Artwork, s: PortfolioSlide) => setLightbox({ art, slide: s }), []);
  const modes: { id: Mode; label: string; icon: React.ReactNode }[] = [
    { id: 'exhibit', label: 'Interactive Exhibition', icon: <Sparkles size={14} /> },
    { id: 'pdf', label: 'PDF Archive', icon: <FileText size={14} /> },
    { id: 'print', label: 'Export All Pages', icon: <Printer size={14} /> },
  ];

  const badgeText = isCore
    ? `SLIDE ${String(slide.pageNumber).padStart(2, '0')} OF ${CORE_PAGE_COUNT}`
    : `BACK MATTER · ${slide.pageNumber}`;

  const renderChapterPills = () => (
    <div className="flex items-center gap-1.5 shrink-0">
      {PARTS.map((p) => {
        const first = SLIDES.findIndex((s) => s.partNumber === p.part);
        const active = slide.partNumber === p.part;
        return (
          <button
            key={p.part}
            id={`chapter-pill-${p.part}${slideExpanded ? '-exp' : ''}`}
            onClick={() => go(first)}
            className={`shrink-0 text-[10.5px] sm:text-[11px] px-2.5 sm:px-3 py-1 rounded-full border whitespace-nowrap transition-colors ${active ? 'bg-ink text-wall border-ink' : 'border-line text-ink/70 hover:border-gold hover:text-gold'}`}
          >
            {p.part === 6 ? 'References & Roles' : p.label}
          </button>
        );
      })}
    </div>
  );

  return (
    <div className="h-full flex flex-col">
      {/* ---------- Top navigation ---------- */}
      <nav className="no-print relative z-40 h-14 shrink-0 flex items-center justify-between gap-2 sm:gap-4 px-2 sm:px-4 border-b border-line bg-wall/90 backdrop-blur">
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <button id="chapter-drawer-btn" onClick={() => setDrawerOpen(true)} aria-label="Open chapter drawer" className="p-1.5 sm:p-2 plaque-border hover:bg-gold/10 shrink-0"><Menu size={16} /></button>
          <div className="leading-none min-w-0">
            <div className="font-serif text-[16px] sm:text-[19px] font-semibold truncate max-w-[140px] sm:max-w-[220px] md:max-w-none">A Journey Through Art</div>
            <div className="font-mono text-[8px] sm:text-[9px] tracking-[0.2em] uppercase text-gold mt-0.5 truncate hidden xs:block">Group 2 · Digital Exhibition</div>
          </div>
        </div>

        <div className="flex plaque-border p-0.5 bg-wall2 shrink-0" role="tablist" aria-label="View mode">
          {modes.map((m) => (
            <button
              key={m.id}
              id={`mode-${m.id}-btn`}
              role="tab"
              aria-selected={mode === m.id}
              onClick={() => {
                setSlideExpanded(false);
                setMode(m.id);
              }}
              className={`flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1 sm:py-1.5 text-[11px] sm:text-[12px] transition-colors ${mode === m.id ? 'bg-gold text-[#0d0d0f] font-semibold' : 'text-ink/75 hover:text-gold'}`}
            >
              {m.icon}<span className="hidden md:inline">{m.label}</span>
            </button>
          ))}
        </div>

        <button id="theme-toggle-btn" onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))} className="flex items-center gap-1.5 plaque-border px-2 sm:px-3 py-1.5 text-[11px] hover:bg-gold/10 shrink-0" aria-label="Toggle theme">
          {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
          <span className="hidden xl:inline">{theme === 'dark' ? 'Parchment' : 'Gallery Dark'}</span>
        </button>
        {mode === 'exhibit' && <div ref={progressRef} className="absolute left-0 bottom-0 h-[2px] bg-gradient-to-r from-gold to-terra" style={{ width: '0%' }} />}
      </nav>

      {/* ---------- MODE 1: Exhibition ---------- */}
      {mode === 'exhibit' && (
        <>
          <div className="no-print shrink-0 flex items-center justify-between gap-2 px-3 sm:px-4 py-1.5 min-h-[44px] border-b border-line bg-wall/60 backdrop-blur">
            <div className="flex items-center gap-2 overflow-x-auto thin-scroll py-0.5 min-w-0 flex-1">
              <div id="slide-badge" className={`shrink-0 font-mono text-[10px] sm:text-[10.5px] tracking-wider px-2 py-1 border whitespace-nowrap ${isCore ? 'border-gold/60 text-gold bg-gold/10' : 'border-terra/60 text-terra bg-terra/10'}`}>
                {isCore ? (
                  <>SLIDE <span ref={counterRef}>{String(slide.pageNumber).padStart(2, '0')}</span> OF {CORE_PAGE_COUNT} <span className="opacity-70 hidden md:inline">(Excluding References)</span></>
                ) : (
                  <>BACK MATTER · {slide.pageNumber} <span className="opacity-70 hidden md:inline">(Excluded)</span></>
                )}
              </div>
              {renderChapterPills()}
            </div>
            <div className="flex items-center gap-2 shrink-0 ml-2">
              <button
                id="expand-slide-top-btn"
                onClick={() => setSlideExpanded(true)}
                className="flex items-center gap-1.5 text-[10.5px] sm:text-[11px] font-mono plaque-border px-2.5 sm:px-3 py-1 bg-gold/10 hover:bg-gold/20 text-gold whitespace-nowrap transition-colors shadow-sm"
                title="Enlarge entire slide carousel view"
              >
                <Maximize2 size={13} />
                <span className="hidden sm:inline">Enlarge Slide</span>
              </button>
              <button id="jump-grid-btn" onClick={() => setJumpOpen(true)} className="flex items-center gap-1.5 text-[10.5px] sm:text-[11px] font-mono plaque-border px-2.5 sm:px-3 py-1 bg-wall2/80 hover:bg-gold/10 text-gold whitespace-nowrap transition-colors shadow-sm">
                <Grid3x3 size={13} />
                <span className="hidden sm:inline">Jump to Slide #</span>
                <span className="sm:hidden">Jump</span>
              </button>
            </div>
          </div>

          <main ref={stageRef} className="flex-1 min-h-0 p-2 sm:p-4 md:p-6 spotlight relative group">
            {!slideExpanded && (
              <>
                <ScaledStage>
                  <Slide key={index} slide={slide} onOpenArt={openArt} onNavigate={go} onEnter={() => go(1)} onOpenPdf={() => setMode('pdf')} />
                </ScaledStage>
                <button
                  id="stage-prev-arrow"
                  onClick={() => go(index - 1)}
                  disabled={index === 0}
                  aria-label="Previous slide"
                  className="no-print hidden md:flex items-center justify-center absolute left-2 top-1/2 -translate-y-1/2 z-20 w-9 h-9 plaque-border bg-wall2/85 text-gold hover:bg-gold hover:text-[#0d0d0f] disabled:opacity-0 disabled:pointer-events-none opacity-65 group-hover:opacity-100 transition-all shadow-md"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  id="stage-next-arrow"
                  onClick={() => go(index + 1)}
                  disabled={index === SLIDES.length - 1}
                  aria-label="Next slide"
                  className="no-print hidden md:flex items-center justify-center absolute right-2 top-1/2 -translate-y-1/2 z-20 w-9 h-9 plaque-border bg-wall2/85 text-gold hover:bg-gold hover:text-[#0d0d0f] disabled:opacity-0 disabled:pointer-events-none opacity-65 group-hover:opacity-100 transition-all shadow-md"
                >
                  <ChevronRight size={18} />
                </button>
              </>
            )}
          </main>

          <div className="no-print shrink-0 flex items-center justify-between px-3 sm:px-4 h-12 border-t border-line bg-wall/80 backdrop-blur gap-2">
            <button id="prev-slide-btn" onClick={() => go(index - 1)} disabled={index === 0} className="flex items-center gap-1 text-[11px] sm:text-[12px] px-2.5 sm:px-3 py-1.5 plaque-border disabled:opacity-30 hover:bg-gold/10 whitespace-nowrap shrink-0"><ChevronLeft size={15} /> Prev</button>
            <div className="text-center min-w-0 px-2 sm:px-3">
              <div className="font-serif italic text-[13px] sm:text-[15px] truncate max-w-[240px] sm:max-w-md md:max-w-xl">{slide.title}</div>
              <div className="font-mono text-[8.5px] sm:text-[9px] text-muted tracking-wider hidden sm:block">← → keys to navigate · click any artwork to inspect · Enlarge Slide for full carousel</div>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                id="expand-slide-bottom-btn"
                onClick={() => setSlideExpanded(true)}
                className="flex items-center gap-1.5 text-[11px] px-2.5 py-1.5 plaque-border text-gold hover:bg-gold/10 whitespace-nowrap"
                title="Enlarge middle slide box"
              >
                <Maximize2 size={14} /> <span className="hidden lg:inline">Enlarge</span>
              </button>
              <button id="next-slide-btn" onClick={() => go(index + 1)} disabled={index === SLIDES.length - 1} className="flex items-center gap-1 text-[11px] sm:text-[12px] px-2.5 sm:px-3 py-1.5 bg-gold text-[#0d0d0f] font-semibold disabled:opacity-30 whitespace-nowrap">Next <ChevronRight size={15} /></button>
            </div>
          </div>
          <CitationDrawer slide={slide} open={citeOpen} onToggle={() => setCiteOpen((o) => !o)} />
        </>
      )}

      {/* ---------- Enlarged Slide Carousel View ---------- */}
      {mode === 'exhibit' && slideExpanded && (
        <div
          className="no-print fixed inset-0 z-[70] bg-wall/98 backdrop-blur-md flex flex-col"
          role="dialog"
          aria-modal="true"
          aria-label={`Enlarged slide carousel: ${slide.title}`}
        >
          <div className="shrink-0 flex items-center justify-between gap-2 px-3 sm:px-5 py-2 border-b border-line bg-wall2/90">
            <div className="flex items-center gap-2 overflow-x-auto thin-scroll py-0.5 min-w-0 flex-1">
              <button id="expanded-drawer-btn" onClick={() => setDrawerOpen(true)} aria-label="Open chapter drawer" className="p-1.5 plaque-border hover:bg-gold/10 shrink-0"><Menu size={15} /></button>
              <span className={`shrink-0 font-mono text-[10px] tracking-wider px-2 py-1 border whitespace-nowrap ${isCore ? 'border-gold/60 text-gold bg-gold/10' : 'border-terra/60 text-terra bg-terra/10'}`}>
                {badgeText}
              </span>
              {renderChapterPills()}
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0 ml-2">
              <div className="flex items-center plaque-border p-0.5 bg-wall" role="group" aria-label="Slide zoom scale">
                {[1, 1.25, 1.5].map((z) => (
                  <button
                    key={z}
                    id={`slide-zoom-${Math.round(z * 100)}-btn`}
                    onClick={() => setSlideZoom(z)}
                    className={`flex items-center gap-1 px-2 py-1 font-mono text-[10px] transition-colors ${slideZoom === z ? 'bg-gold text-[#0d0d0f] font-semibold' : 'text-ink/80 hover:text-gold'}`}
                    title={`Slide scale ${Math.round(z * 100)}%`}
                  >
                    {z === 1 ? 'Fit' : <><ZoomIn size={11} />{Math.round(z * 100)}%</>}
                  </button>
                ))}
              </div>
              <button id="expanded-jump-btn" onClick={() => setJumpOpen(true)} className="flex items-center gap-1 text-[10.5px] font-mono plaque-border px-2.5 py-1.5 hover:bg-gold/10 text-gold whitespace-nowrap">
                <Grid3x3 size={13} />
                <span className="hidden md:inline">Jump</span>
              </button>
              <button id="expanded-theme-btn" onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))} className="flex items-center gap-1 plaque-border px-2.5 py-1.5 text-[10.5px] hover:bg-gold/10 shrink-0" aria-label="Toggle theme">
                {theme === 'dark' ? <Sun size={13} /> : <Moon size={13} />}
              </button>
              <button
                id="close-expanded-slide-btn"
                onClick={closeExpanded}
                className="flex items-center gap-1.5 bg-gold text-[#0d0d0f] px-3 py-1.5 text-[11px] font-semibold hover:brightness-110 whitespace-nowrap"
              >
                <Minimize2 size={13} /> <span className="hidden sm:inline">Exit Enlarged</span>
              </button>
            </div>
          </div>

          <div className="flex-1 min-h-0 flex items-center gap-2 sm:gap-4 px-2 sm:px-5 py-2 sm:py-3 spotlight relative">
            <button
              id="carousel-prev-btn"
              onClick={() => go(index - 1)}
              disabled={index === 0}
              aria-label="Previous slide"
              className="shrink-0 flex items-center justify-center w-9 h-14 sm:w-11 sm:h-16 plaque-border bg-wall2/90 text-gold hover:bg-gold hover:text-[#0d0d0f] disabled:opacity-25 transition-colors shadow-md"
            >
              <ChevronLeft size={22} />
            </button>
            <div ref={expandedStageRef} className="flex-1 h-full min-w-0 min-h-0">
              <ScaledStage zoom={slideZoom}>
                <Slide
                  key={index}
                  slide={slide}
                  onOpenArt={openArt}
                  onNavigate={go}
                  onEnter={() => go(1)}
                  onOpenPdf={() => {
                    closeExpanded();
                    setMode('pdf');
                  }}
                />
              </ScaledStage>
            </div>
            <button
              id="carousel-next-btn"
              onClick={() => go(index + 1)}
              disabled={index === SLIDES.length - 1}
              aria-label="Next slide"
              className="shrink-0 flex items-center justify-center w-9 h-14 sm:w-11 sm:h-16 plaque-border bg-wall2/90 text-gold hover:bg-gold hover:text-[#0d0d0f] disabled:opacity-25 transition-colors shadow-md"
            >
              <ChevronRight size={22} />
            </button>
          </div>

          <div className="shrink-0 flex items-center justify-between px-3 sm:px-5 h-11 border-t border-line bg-wall2/85">
            <button id="expanded-prev-btn" onClick={() => go(index - 1)} disabled={index === 0} className="flex items-center gap-1 text-[11px] sm:text-[12px] px-2.5 sm:px-3 py-1 plaque-border disabled:opacity-30 hover:bg-gold/10 whitespace-nowrap"><ChevronLeft size={14} /> Prev</button>
            <div className="text-center min-w-0 px-2">
              <div className="font-serif italic text-[13px] sm:text-[15px] truncate max-w-[240px] sm:max-w-md md:max-w-xl">{slide.title}</div>
              <div className="font-mono text-[8.5px] text-muted tracking-wider hidden sm:block">← → keys to browse carousel · click any artwork to inspect · Esc to exit enlarged view</div>
            </div>
            <button id="expanded-next-btn" onClick={() => go(index + 1)} disabled={index === SLIDES.length - 1} className="flex items-center gap-1 text-[11px] sm:text-[12px] px-2.5 sm:px-3 py-1 bg-gold text-[#0d0d0f] font-semibold disabled:opacity-30 whitespace-nowrap">Next <ChevronRight size={14} /></button>
          </div>
          <CitationDrawer slide={slide} open={citeOpen} onToggle={() => setCiteOpen((o) => !o)} />
        </div>
      )}

      {/* ---------- MODE 2: PDF Archive ---------- */}
      {mode === 'pdf' && <div className="flex-1 min-h-0"><PdfHub onGoPrint={() => setMode('print')} /></div>}

      {/* ---------- MODE 3: Print all pages ---------- */}
      {mode === 'print' && (
        <div className="flex-1 min-h-0 overflow-auto thin-scroll print-scroll">
          <div className="no-print sticky top-0 z-30 flex flex-wrap items-center justify-center gap-4 py-3 px-4 bg-wall/90 backdrop-blur border-b border-line">
            <span className="font-mono text-[10.5px] text-muted">{SLIDES.length} pages · {CORE_PAGE_COUNT} core + {BACK_MATTER_COUNT} back matter · 1122×631 (16:9)</span>
            <button id="export-print-btn" onClick={() => window.print()} className="flex items-center gap-2 bg-gold text-[#0d0d0f] px-5 py-2 text-[13px] font-semibold hover:brightness-110">
              <Printer size={15} /> 🖨️ Export All {SLIDES.length} Pages to PDF
            </button>
            <span className="font-mono text-[10px] text-muted">Chrome → Save as PDF · Margins: None · ✔ Background graphics</span>
          </div>
          <div className="print-canvas flex flex-col items-center gap-8 py-8">
            {SLIDES.map((s) => (
              <div key={String(s.pageNumber)} className="print-page shadow-[0_30px_60px_-30px_rgba(0,0,0,0.7)] plaque-border">
                <Slide slide={s} printMode onNavigate={(i) => { setMode('exhibit'); go(i); }} />
              </div>
            ))}
          </div>
        </div>
      )}

      {lightbox && <Lightbox art={lightbox.art} slide={lightbox.slide} onClose={() => setLightbox(null)} />}
      {jumpOpen && <JumpModal current={index} onJump={go} onClose={() => setJumpOpen(false)} />}
      {drawerOpen && <ChapterDrawer current={index} onJump={(i) => { setMode('exhibit'); go(i); }} onClose={() => setDrawerOpen(false)} />}
    </div>
  );
}
