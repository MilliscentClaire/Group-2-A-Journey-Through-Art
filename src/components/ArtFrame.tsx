import { useCallback, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { Frame, Maximize2 } from 'lucide-react';
import type { Artwork } from '../types';

/** Tries local /public file → remote URL → elegant museum placeholder. */
export function ArtImage({
  art,
  fit = 'contain',
  className = '',
  onSize,
}: {
  art: Artwork;
  fit?: 'contain' | 'cover';
  className?: string;
  onSize?: (w: number, h: number) => void;
}) {
  const sources = useMemo(
    () => [art.localImagePath, art.imageUrl].filter((s): s is string => !!s),
    [art.localImagePath, art.imageUrl],
  );
  const [idx, setIdx] = useState(0);

  const imgRef = useCallback(
    (el: HTMLImageElement | null) => {
      if (el && el.complete && el.naturalWidth > 0 && el.naturalHeight > 0) {
        onSize?.(el.naturalWidth, el.naturalHeight);
      }
    },
    [onSize],
  );

  if (idx >= sources.length) {
    return <MuseumPlaceholder art={art} />;
  }
  return (
    <img
      ref={imgRef}
      src={sources[idx]}
      alt={`${art.title} by ${art.artist}`}
      loading="eager"
      decoding="async"
      referrerPolicy="no-referrer"
      onLoad={(e) => onSize?.(e.currentTarget.naturalWidth, e.currentTarget.naturalHeight)}
      onError={() => {
        setIdx((i) => {
          const next = i + 1;
          if (next >= sources.length) onSize?.(0, 0);
          return next;
        });
      }}
      className={`w-full h-full ${fit === 'cover' ? 'object-cover' : 'object-contain'} ${className}`}
    />
  );
}

export function MuseumPlaceholder({ art }: { art: Artwork }) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-center gap-2 p-4 bg-[radial-gradient(circle_at_50%_40%,rgba(197,160,89,0.14),transparent_70%)]">
      <Frame className="text-gold/70" size={26} strokeWidth={1.2} />
      <div className="font-serif italic text-[15px] leading-tight text-ink">{art.title}</div>
      <div className="font-mono text-[8.5px] tracking-[0.18em] uppercase text-gold/80">Image forthcoming</div>
      <div className="font-mono text-[8px] text-muted break-all max-w-[90%]">Add {art.localImagePath}</div>
    </div>
  );
}

interface FrameProps {
  art: Artwork;
  onOpen?: (a: Artwork) => void;
  variant?: 'gold' | 'terra';
  showPlaque?: boolean;
  fit?: 'contain' | 'cover';
  label?: string;
  className?: string;
}

/** Museum frame: mat + shutter + SVG golden line (animated via anime.js) + plaque. */
export function ArtFrame({ art, onOpen, variant = 'gold', showPlaque = true, fit = 'contain', label, className = '' }: FrameProps) {
  const stroke = variant === 'terra' ? '#b85d3b' : '#c5a059';
  const stageRef = useRef<HTMLDivElement>(null);
  const [stage, setStage] = useState<{ w: number; h: number }>({ w: 0, h: 0 });
  const [ratio, setRatio] = useState<number | null>(null);

  const handleSize = useCallback((w: number, h: number) => {
    setRatio(w > 0 && h > 0 ? w / h : null);
  }, []);

  useLayoutEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const update = () => setStage({ w: el.clientWidth, h: el.clientHeight });
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const fitted = useMemo(() => {
    if (fit !== 'contain' || !ratio || stage.w <= 0 || stage.h <= 0) return null;
    const plaqueH = showPlaque ? 38 : 0;
    const maxW = Math.max(0, stage.w);
    const maxH = Math.max(0, stage.h - plaqueH);
    const availImgW = Math.max(1, maxW - 16);
    const availImgH = Math.max(1, maxH - 16);
    let imgW: number;
    let imgH: number;
    if (availImgW / availImgH > ratio) {
      imgH = availImgH;
      imgW = availImgH * ratio;
    } else {
      imgW = availImgW;
      imgH = availImgW / ratio;
    }
    return {
      w: Math.min(maxW, Math.round(imgW + 16)),
      h: Math.min(maxH, Math.round(imgH + 16)),
    };
  }, [fit, ratio, stage.w, stage.h, showPlaque]);

  return (
    <figure
      ref={stageRef}
      data-anim
      className={`flex flex-col min-h-0 min-w-0 m-0 ${fitted ? 'items-center justify-center' : ''} ${className}`}
    >
      <div
        style={fitted ? { width: fitted.w, height: fitted.h } : undefined}
        className={`frame-mat ${variant === 'terra' ? 'frame-terra' : ''} relative ${fitted ? 'shrink-0' : 'flex-1 min-h-0 w-full'} group cursor-zoom-in`}
        onClick={() => onOpen?.(art)}
        role="button"
        tabIndex={0}
        aria-label={`Inspect ${art.title}`}
        onKeyDown={(e) => e.key === 'Enter' && onOpen?.(art)}
      >
        <div className="absolute inset-[8px] overflow-hidden bg-black/30">
          <div data-frame-img className="w-full h-full">
            <ArtImage key={art.id + art.localImagePath} art={art} fit={fitted ? 'cover' : fit} onSize={handleSize} />
          </div>
          <div data-shutter className="absolute inset-0 bg-wall2 origin-top" style={{ transform: 'scaleY(0)' }} />
        </div>
        <svg className="absolute inset-[3px] w-[calc(100%-6px)] h-[calc(100%-6px)] pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
          <rect data-frame-line x="0.5" y="0.5" width="99" height="99" fill="none" stroke={stroke} strokeWidth="1" vectorEffect="non-scaling-stroke" pathLength={100} strokeDasharray="100" strokeDashoffset="0" />
        </svg>
        {label && <span className="absolute top-2 left-2 font-mono text-[9px] px-1.5 py-0.5 bg-wall/80 text-gold plaque-border">{label}</span>}
        <span className="no-print absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-wall/85 text-gold p-1.5 plaque-border">
          <Maximize2 size={13} />
        </span>
      </div>
      {showPlaque && (
        <figcaption style={fitted ? { width: fitted.w } : undefined} className="pt-2 leading-tight shrink-0 max-w-full">
          <div className="font-serif italic text-[13px] text-ink truncate">{art.title}</div>
          <div className="font-mono text-[8.5px] tracking-wider uppercase text-muted truncate">
            {art.artist} · {art.yearOrPeriod}
          </div>
        </figcaption>
      )}
    </figure>
  );
}
