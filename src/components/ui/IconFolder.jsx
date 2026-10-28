import * as React from 'react';

/* ------------------------------------------------------------------ */
/*  Icon Folder — a glass folder with app icons fanned out of it.       */
/*  Pops in when it scrolls into view; hover / tap / Enter spreads the  */
/*  icons wider. The folder tab shape is drawn to the real card width. */
/* ------------------------------------------------------------------ */

const FIGMA_NODE = (
  <svg viewBox="0 0 200 300" width="36%" height="54%" aria-hidden="true">
    <path fill="#0acf83" d="M50 300c27.6 0 50-22.4 50-50v-50H50c-27.6 0-50 22.4-50 50s22.4 50 50 50z" />
    <path fill="#a259ff" d="M0 150c0-27.6 22.4-50 50-50h50v100H50c-27.6 0-50-22.4-50-50z" />
    <path fill="#f24e1e" d="M0 50C0 22.4 22.4 0 50 0h50v100H50C22.4 100 0 77.6 0 50z" />
    <path fill="#ff7262" d="M100 0h50c27.6 0 50 22.4 50 50s-22.4 50-50 50h-50V0z" />
    <path fill="#1abcfe" d="M200 150c0 27.6-22.4 50-50 50s-50-22.4-50-50 22.4-50 50-50 50 22.4 50 50z" />
  </svg>
);

const CANVA_NODE = (
  <svg viewBox="0 0 24 24" width="58%" height="58%" fill="#fff" aria-hidden="true">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.77 16.03c-.98 1.54-2.82 2.72-4.96 2.72-3.28 0-5.56-2.46-5.56-5.94 0-3.95 2.79-7.56 6.53-7.56 2.38 0 3.92 1.21 3.92 2.86 0 1.52-1.08 2.57-2.21 2.57-.63 0-1.08-.36-1.08-.95 0-.54.48-.96.48-1.58 0-.52-.43-.88-1.15-.88-1.92 0-3.68 2.54-3.68 5.48 0 2.18 1.24 3.62 3.12 3.62 1.51 0 2.86-.86 3.68-2.08.22-.32.63-.42.93-.18.3.22.34.62.08.92z" />
  </svg>
);

const PROCREATE_NODE = (
  <svg viewBox="0 0 64 64" width="66%" height="66%" aria-hidden="true">
    <defs>
      <linearGradient id="procreate-grad" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#ff4e50" />
        <stop offset="35%" stopColor="#f9d423" />
        <stop offset="70%" stopColor="#24c6dc" />
        <stop offset="100%" stopColor="#a855f7" />
      </linearGradient>
    </defs>
    <path
      fill="url(#procreate-grad)"
      d="M50.5 11.5c-5.8-1.2-13.6 2.5-20.8 9.7-5.6 5.6-9.2 12-9.8 17.2-.3 2.4-1.7 4.7-4 6.2-1.8 1.2-3.9 1.7-5.9 1.5 1.8 3.6 6 5.8 10.9 5.5 6.4-.4 13.7-4.5 19.6-10.4 7.8-7.8 11.7-17.8 10-29.7z"
    />
  </svg>
);

export const DEFAULT_ICONS = [
  {
    label: 'Figma',
    background: 'linear-gradient(135deg,#2c2c2c,#141414)',
    node: FIGMA_NODE,
  },
  {
    label: 'After Effects',
    src: '/adobe-after-effects.svg',
    background: 'linear-gradient(135deg,#00005B,#000038)',
    imgClassName: 'h-[86%] w-[86%] object-contain',
  },
];

export const SKILL_FOLDER_ICONS = {
  web: [
    {
      label: 'CodeIgniter 4',
      src: '/codeigniter.svg',
      background: 'linear-gradient(135deg,#2a1612,#140b09)',
      imgClassName: 'h-[72%] w-[72%] object-contain',
    },
    {
      label: 'PHP',
      src: '/php.svg',
      background: 'linear-gradient(135deg,#252b48,#131728)',
      imgClassName: 'h-[78%] w-[78%] object-contain',
    },
    {
      label: 'MySQL',
      src: '/mysql.svg',
      background: 'linear-gradient(135deg,#0f293a,#081722)',
      imgClassName: 'h-[78%] w-[78%] object-contain',
    },
    {
      label: 'JavaScript',
      src: '/javascript.svg',
      background: 'linear-gradient(135deg,#f7df1e,#d4b800)',
      imgClassName: 'h-full w-full object-cover',
    },
    {
      label: 'React',
      src: '/react.svg',
      background: 'linear-gradient(135deg,#1d2636,#0c111b)',
      imgClassName: 'h-[72%] w-[72%] object-contain',
    },
    {
      label: 'WordPress',
      src: '/wordpress.svg',
      background: 'linear-gradient(135deg,#0d2b38,#071821)',
      imgClassName: 'h-[68%] w-[68%] object-contain',
    },
    {
      label: 'Postman API',
      src: '/postman.svg',
      background: 'linear-gradient(135deg,#2b1912,#160d0a)',
      imgClassName: 'h-[74%] w-[74%] object-contain',
    },
  ],
  design: [
    {
      label: 'Adobe Illustrator',
      src: '/adobe-illustrator.svg',
      background: 'linear-gradient(135deg,#330000,#1c0000)',
      imgClassName: 'h-[88%] w-[88%] object-contain',
    },
    {
      label: 'Photoshop',
      src: '/adobe-photoshop.svg',
      background: 'linear-gradient(135deg,#001E36,#00101f)',
      imgClassName: 'h-[88%] w-[88%] object-contain',
    },
    {
      label: 'Premiere Pro',
      src: '/adobe-premiere.svg',
      background: 'linear-gradient(135deg,#00005B,#000033)',
      imgClassName: 'h-[88%] w-[88%] object-contain',
    },
    {
      label: 'After Effects',
      src: '/adobe-after-effects.svg',
      background: 'linear-gradient(135deg,#00005B,#000033)',
      imgClassName: 'h-[88%] w-[88%] object-contain',
    },
    {
      label: 'Canva',
      background: 'linear-gradient(135deg,#00c4cc,#5a32fa)',
      node: CANVA_NODE,
    },
    {
      label: 'Figma',
      background: 'linear-gradient(135deg,#2c2c2c,#141414)',
      node: FIGMA_NODE,
    },
    {
      label: 'ProCreate',
      background: 'linear-gradient(135deg,#1e1b2e,#0e0c17)',
      node: PROCREATE_NODE,
    },
  ],
};

const DEFAULTS = {
  title: 'Design',
  tags: ['Figma', 'After Effects'],
  icons: DEFAULT_ICONS,
};

const THEMES = {
  dark: {
    ink: '#f4f4f6',
    subInk: 'rgba(180, 190, 210, 0.78)',
    chipBg: 'rgba(255, 255, 255, 0.05)',
    chipBorder: 'rgba(255, 255, 255, 0.1)',
    chipInk: '#b0b8c9',
    chipActiveBg: 'rgba(59, 130, 246, 0.18)',
    back: 'linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.012) 60%)',
    backEdge: 'rgba(255, 255, 255, 0.09)',
    front:
      'linear-gradient(160deg, rgba(255,255,255,0.11), rgba(255,255,255,0.02) 55%), rgba(13, 18, 32, 0.78)',
    frontEdge: ['rgba(255,255,255,0.42)', 'rgba(255,255,255,0.12)', 'rgba(255,255,255,0.02)'],
    glow: 'rgba(59, 130, 246, 0.16)',
    pillBg: 'rgba(10, 14, 24, 0.68)',
    pillBorder: 'rgba(255, 255, 255, 0.12)',
    tileRing: 'rgba(255, 255, 255, 0.16)',
    tileShadow: 'rgba(0, 0, 0, 0.58)',
    focus: '#60a5fa',
  },
  light: {
    ink: '#0f172a',
    subInk: 'rgba(51, 65, 85, 0.8)',
    chipBg: 'rgba(255, 255, 255, 0.75)',
    chipBorder: 'rgba(15, 23, 42, 0.1)',
    chipInk: '#475569',
    chipActiveBg: 'rgba(37, 99, 235, 0.12)',
    back: 'linear-gradient(180deg, rgba(15,23,42,0.055), rgba(15,23,42,0.015) 60%)',
    backEdge: 'rgba(15, 23, 42, 0.09)',
    front:
      'linear-gradient(160deg, rgba(255,255,255,0.96), rgba(255,255,255,0.65) 55%), rgba(241, 245, 249, 0.76)',
    frontEdge: ['rgba(255,255,255,1)', 'rgba(15,23,42,0.08)', 'rgba(15,23,42,0.04)'],
    glow: 'rgba(59, 130, 246, 0.14)',
    pillBg: 'rgba(255, 255, 255, 0.85)',
    pillBorder: 'rgba(15, 23, 42, 0.1)',
    tileRing: 'rgba(15, 23, 42, 0.1)',
    tileShadow: 'rgba(15, 23, 42, 0.18)',
    focus: '#2563eb',
  },
};

/* folder outlines: front pocket has its tab on the left, back plate on the right */
const pathL = (w, h, r, d, tw, s) =>
  `M0 ${r}A${r} ${r} 0 0 1 ${r} 0L${tw} 0C${tw + s * 0.55} 0 ${tw + s * 0.45} ${d} ${tw + s} ${d}L${w - r} ${d}A${r} ${r} 0 0 1 ${w} ${d + r}L${w} ${h - r}A${r} ${r} 0 0 1 ${w - r} ${h}L${r} ${h}A${r} ${r} 0 0 1 0 ${h - r}Z`;

const pathR = (w, h, r, d, tw, s) => {
  const x = w - tw;
  return `M0 ${d + r}A${r} ${r} 0 0 1 ${r} ${d}L${x - s} ${d}C${x - s * 0.45} ${d} ${x - s * 0.55} 0 ${x} 0L${w - r} 0A${r} ${r} 0 0 1 ${w} ${r}L${w} ${h - r}A${r} ${r} 0 0 1 ${w - r} ${h}L${r} ${h}A${r} ${r} 0 0 1 0 ${h - r}Z`;
};

function useShape(ref, make) {
  const [shape, setShape] = React.useState({ d: '', w: 420 });
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => {
      const w = el.offsetWidth;
      const h = el.offsetHeight;
      if (w > 0 && h > 0) {
        setShape({ d: make(w, h), w });
      }
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return shape;
}

function Tile({ icon, ring, shadow }) {
  return (
    <div
      className="grid h-full w-full place-items-center overflow-hidden rounded-[inherit]"
      style={{
        background: icon.background ?? '#2a2a2a',
        boxShadow: `0 18px 40px ${shadow}, 0 0 0 1px ${ring}`,
      }}
    >
      {icon.src ? (
        <img
          src={icon.src}
          alt={icon.label || ''}
          draggable={false}
          className={icon.imgClassName || 'h-[72%] w-[72%] object-contain'}
        />
      ) : (
        icon.node
      )}
    </div>
  );
}

export function IconFolder(props) {
  const { title, subtitle, tags, icons } = { ...DEFAULTS, ...props };
  const {
    theme = 'dark',
    defaultOpen = false,
    spread = 56,
    showPill = true,
    className = '',
  } = props;
  const t = THEMES[theme] || THEMES.dark;
  const gid = React.useId().replace(/:/g, '');

  const rootRef = React.useRef(null);
  const frontRef = React.useRef(null);
  const backRef = React.useRef(null);
  const [shown, setShown] = React.useState(false);
  const [open, setOpen] = React.useState(defaultOpen);
  const [hover, setHover] = React.useState(false);
  const [hi, setHi] = React.useState(null);
  const [reduced, setReduced] = React.useState(false);

  React.useEffect(() => setOpen(defaultOpen), [defaultOpen]);
  React.useEffect(
    () => setReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches),
    []
  );
  React.useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setShown(true),
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const { d: frontD, w: cardW } = useShape(frontRef, (w, h) =>
    pathL(w, h, 24, 24, Math.round(w * 0.42), 46)
  );
  const { d: backD } = useShape(backRef, (w, h) =>
    pathR(w, h, 24, 24, Math.round(w * 0.4), 46)
  );

  const n = icons.length;
  const rs = n > 1 ? 26 / (n - 1) : 0; // degrees of tilt per step
  const wide = open || hover;
  const lift = wide;
  const ease = 'cubic-bezier(.2,.8,.2,1)';
  const toggle = () => setOpen((o) => !o);

  // Adapt spread and arc drop so 5–7 fanned tiles fit cleanly across mobile & desktop cards
  const maxSafeSpread = n > 1 ? Math.max(32, (cardW - 104) / (n - 1) / 1.15) : spread;
  const effectiveSpread = Math.min(spread, maxSafeSpread);
  const arcDrop = n > 5 ? 4.2 : 8;

  return (
    <div
      ref={rootRef}
      role="button"
      tabIndex={0}
      aria-expanded={wide}
      aria-label={`${title}: ${tags.join(', ')}`}
      onClick={() => {
        if (hover) setHover((h) => !h);
        else toggle();
      }}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggle();
        }
      }}
      onPointerEnter={(e) => e.pointerType === 'mouse' && setHover(true)}
      onPointerLeave={() => {
        setHover(false);
        setHi(null);
      }}
      className={`relative isolate mx-auto h-[332px] w-full max-w-[500px] cursor-pointer select-none outline-none [-webkit-tap-highlight-color:transparent] focus-visible:rounded-3xl focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 ${className}`}
      style={{
        color: t.ink,
        outlineColor: t.focus,
        zIndex: lift ? 2 : undefined,
        opacity: shown || reduced ? 1 : 0,
        transform:
          shown || reduced
            ? lift
              ? 'translateY(-6px) scale(1.015)'
              : 'none'
            : 'translateY(34px) scale(.92)',
        transition: reduced ? 'none' : `transform .9s ${ease}, opacity .6s ease`,
      }}
    >
      {/* soft glow behind the folder */}
      <div
        className="pointer-events-none absolute left-[8%] right-[8%] top-10 -z-10 h-[220px] rounded-full opacity-85 blur-[22px]"
        style={{ background: `radial-gradient(closest-side, ${t.glow}, transparent)` }}
      />

      {/* back plate */}
      <div
        ref={backRef}
        className="absolute inset-x-0 bottom-0 top-[14px]"
        style={{ background: t.back, clipPath: backD ? `path('${backD}')` : undefined }}
      >
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
          aria-hidden="true"
        >
          <path d={backD} fill="none" stroke={t.backEdge} strokeWidth="2" />
        </svg>
      </div>

      {/* fanned icons */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {icons.map((icon, i) => {
          const k = i - (n - 1) / 2;
          const gap = wide ? effectiveSpread * 1.15 : effectiveSpread;
          const y = k * k * arcDrop - (wide ? 6 : 0);
          const rot = k * rs * (wide ? 1.2 : 1);
          return (
            <div
              key={icon.label || i}
              className="absolute left-1/2 top-[38px] -ml-[44px] h-[88px] w-[88px] rounded-[22px] [backface-visibility:hidden]"
              style={{
                zIndex: hi === i ? 5 : undefined,
                opacity: shown || reduced ? 1 : 0,
                transform:
                  shown || reduced
                    ? `translate3d(${k * gap}px, ${y}px, 0) rotate(${rot}deg)`
                    : `translate3d(${k * effectiveSpread * 0.6}px, 80px, 0)`,
                transition: reduced ? 'none' : `transform ${wide ? 0.6 : 0.9}s ${ease}, opacity .5s`,
                transitionDelay: reduced ? '0s' : wide ? `${i * 0.035}s` : `${0.32 + i * 0.06}s`,
              }}
            >
              <div
                className="pointer-events-auto relative h-full w-full rounded-[inherit]"
                onPointerEnter={(e) => e.pointerType === 'mouse' && setHi(i)}
                onPointerLeave={() => setHi((h) => (h === i ? null : h))}
                style={{
                  transform:
                    hi === i
                      ? `translateY(-26px) rotate(${-rot}deg) scale(1.12)`
                      : hi !== null
                        ? 'scale(.96)'
                        : 'none',
                  filter: hi !== null && hi !== i ? 'saturate(.75) brightness(.85)' : 'none',
                  transition: reduced ? 'none' : `transform .45s ${ease}, filter .3s ease`,
                }}
              >
                <Tile icon={icon} ring={t.tileRing} shadow={t.tileShadow} />
                {icon.label && (
                  <span
                    className="pointer-events-none absolute bottom-full left-1/2 mb-2.5 whitespace-nowrap rounded-full border px-3 py-1 text-xs font-semibold leading-4 tracking-normal backdrop-blur-[10px]"
                    style={{
                      background: t.pillBg,
                      borderColor: t.pillBorder,
                      color: t.ink,
                      opacity: hi === i ? 1 : 0,
                      transform: `translateX(-50%) translateY(${hi === i ? 0 : 6}px)`,
                      transition: reduced ? 'none' : `opacity .25s ease, transform .35s ${ease}`,
                    }}
                  >
                    {icon.label}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* glass front pocket */}
      <div
        ref={frontRef}
        className="absolute inset-x-0 bottom-0 h-[218px] overflow-hidden backdrop-blur-[18px] backdrop-saturate-150"
        style={{
          background: t.front,
          clipPath: frontD ? `path('${frontD}')` : undefined,
          transform: lift ? 'translateY(6px)' : 'none',
          transition: reduced ? 'none' : `transform .6s ${ease}`,
        }}
      >
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id={`edge-${gid}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor={t.frontEdge[0]} />
              <stop offset=".35" stopColor={t.frontEdge[1]} />
              <stop offset="1" stopColor={t.frontEdge[2]} />
            </linearGradient>
          </defs>
          <path d={frontD} fill="none" stroke={`url(#edge-${gid})`} strokeWidth="2" />
        </svg>

        <div className="px-[22px] pt-[34px]">
          <h3 className="m-0 font-display text-xl font-bold tracking-tight">{title}</h3>
          {subtitle && (
            <p
              className="mt-1 line-clamp-1 text-xs font-normal tracking-normal"
              style={{ color: t.subInk }}
            >
              {subtitle}
            </p>
          )}
        </div>

        <div className="mx-[22px] mt-3 flex flex-wrap gap-1.5">
          {tags.map((tag) => {
            const isMatched = hi !== null && icons[hi]?.label === tag;
            return (
              <span
                key={tag}
                className="inline-flex h-6 items-center whitespace-nowrap rounded-full border px-2.5 text-xs font-medium leading-5 tracking-normal backdrop-blur-[7px]"
                style={{
                  background: isMatched ? t.chipActiveBg : t.chipBg,
                  borderColor: isMatched ? t.focus : t.chipBorder,
                  color: isMatched ? t.ink : t.chipInk,
                  transition: 'border-color .25s ease, color .25s ease, background-color .25s ease',
                }}
              >
                {tag}
              </span>
            );
          })}
        </div>

        {showPill && (
          <span
            className="absolute bottom-3.5 right-3.5 flex h-[34px] items-center gap-1.5 rounded-full border px-1.5 backdrop-blur-md"
            style={{ background: t.pillBg, borderColor: t.pillBorder }}
            aria-hidden="true"
          >
            {icons.map((icon, i) => (
              <span
                key={icon.label || i}
                className="block h-[22px] w-[22px] overflow-hidden rounded-[7px]"
              >
                <span
                  className="grid h-full w-full place-items-center [&_svg]:h-[65%] [&_svg]:w-[65%]"
                  style={{ background: icon.background ?? '#2a2a2a' }}
                >
                  {icon.src ? (
                    <img
                      src={icon.src}
                      alt=""
                      className={icon.imgClassName || 'h-[76%] w-[76%] object-contain'}
                    />
                  ) : (
                    icon.node
                  )}
                </span>
              </span>
            ))}
          </span>
        )}
      </div>
    </div>
  );
}

export default IconFolder;
