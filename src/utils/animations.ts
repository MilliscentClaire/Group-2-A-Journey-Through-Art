import anime from 'animejs';

type Root = Element | null | undefined;

const q = (root: Root, sel: string): Element[] => (root ? Array.from(root.querySelectorAll(sel)) : []);

/** 1. Page/Slide transition — staggered fade & slide-up of every [data-anim] element. */
export function animateSlideIn(root: Root) {
  const targets = q(root, '[data-anim]');
  if (!targets.length) return;
  anime.remove(targets);
  anime.set(targets, { opacity: 0, translateY: 12 });
  anime({
    targets,
    translateY: [12, 0],
    opacity: [0, 1],
    easing: 'easeOutCubic',
    duration: 460,
    delay: anime.stagger(28, { start: 0 }),
  });
}

/** 2. Artwork frame reveal — image fades/scales in seamlessly and golden border draws itself. */
export function animateFrameReveal(root: Root) {
  const shutters = q(root, '[data-shutter]');
  const imgs = q(root, '[data-frame-img]');
  const lines = q(root, '[data-frame-line]');
  anime.remove([...shutters, ...imgs, ...lines]);
  anime.set(shutters, { scaleY: 0 });
  anime.set(imgs, { opacity: 0, scale: 0.975 });
  anime({
    targets: imgs,
    scale: [0.975, 1],
    opacity: [0, 1],
    easing: 'easeOutCubic',
    duration: 520,
    delay: anime.stagger(55, { start: 0 }),
  });
  anime({
    targets: lines,
    strokeDashoffset: [100, 0],
    easing: 'easeOutCubic',
    duration: 650,
    delay: anime.stagger(55, { start: 40 }),
  });
}

/** 3a. Chapter card entrance stagger (TOC, drawer, jump grid). */
export function animateCardsIn(root: Root, selector = '[data-card]') {
  const targets = q(root, selector);
  if (!targets.length) return;
  anime.remove(targets);
  anime({
    targets,
    translateY: [24, 0],
    scale: [0.97, 1],
    opacity: [0, 1],
    easing: 'easeOutExpo',
    duration: 900,
    delay: anime.stagger(55, { start: 120 }),
  });
}

/** 3b. Hover lift for chapter cards. */
export function animateCardHover(el: Element, entering: boolean) {
  anime.remove(el);
  anime({
    targets: el,
    translateY: entering ? -6 : 0,
    scale: entering ? 1.015 : 1,
    easing: 'easeOutQuart',
    duration: 420,
  });
}

/** 4a. Smooth numeric counter for the slide indicator. */
export function animateCounter(el: Element | null, from: number, to: number, pad = 2) {
  if (!el) return;
  const obj = { v: from };
  anime({
    targets: obj,
    v: to,
    round: 1,
    easing: 'easeOutExpo',
    duration: 700,
    update: () => {
      el.textContent = String(obj.v).padStart(pad, '0');
    },
  });
}

/** 4b. Exhibition progress bar. */
export function animateProgress(el: Element | null, percent: number) {
  if (!el) return;
  anime.remove(el);
  anime({ targets: el, width: `${percent}%`, easing: 'easeOutExpo', duration: 900 });
}

/** Overlay (lightbox / modal) entrance. */
export function animateOverlayIn(root: Root) {
  if (!root) return;
  anime({ targets: root, opacity: [0, 1], duration: 350, easing: 'easeOutQuad' });
  const panel = q(root, '[data-panel]');
  anime({ targets: panel, translateY: [30, 0], scale: [0.97, 1], opacity: [0, 1], duration: 700, easing: 'easeOutExpo' });
}
