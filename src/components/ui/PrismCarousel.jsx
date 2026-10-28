import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

function formatIndex(num) {
  return String(num).padStart(2, '0');
}

export default function PrismCarousel({
  items = [],
  labels = {},
  autoplay = true,
  interval = 5000,
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoplay);
  const [isHovered, setIsHovered] = useState(false);
  const [sweepKey, setSweepKey] = useState(0);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { margin: '-40px' });
  const total = items.length;

  const goTo = useCallback(
    (nextIdx) => {
      setActiveIndex((nextIdx + total) % total);
      setSweepKey((prev) => prev + 1);
    },
    [total]
  );

  const prev = useCallback(() => {
    goTo(activeIndex - 1);
  }, [activeIndex, goTo]);

  const next = useCallback(() => {
    goTo(activeIndex + 1);
  }, [activeIndex, goTo]);

  // Autoplay timer (paused on user hover, when off-screen, or when disabled)
  useEffect(() => {
    if (!isPlaying || isHovered || !isInView || total <= 1) return;
    const timer = setInterval(() => {
      next();
    }, interval);
    return () => clearInterval(timer);
  }, [isPlaying, isHovered, isInView, next, interval, total]);

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prev();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        next();
      }
    },
    [prev, next]
  );

  // Drag handling
  const handleDragEnd = (_, info) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    if (offset < -60 || velocity < -400) {
      next();
    } else if (offset > 60 || velocity > 400) {
      prev();
    }
  };

  if (!items || items.length === 0) return null;

  const activeProject = items[activeIndex];

  // Helper to calculate circular distance and styling
  const getCardStyle = (index) => {
    let diff = index - activeIndex;
    while (diff > total / 2) diff -= total;
    while (diff < -total / 2) diff += total;

    const isCenter = diff === 0;
    const isPrev = diff === -1;
    const isNext = diff === 1;

    let translateX = '0%';
    let translateZ = 0;
    let rotateY = 0;
    let scale = 1;
    let opacity = 1;
    let zIndex = 30;
    let filter = 'grayscale(0%) brightness(100%)';
    let pointerEvents = 'auto';

    if (isCenter) {
      translateX = '0%';
      translateZ = 0;
      rotateY = 0;
      scale = 1;
      opacity = 1;
      zIndex = 30;
      filter = 'grayscale(0%) brightness(100%)';
    } else if (isPrev) {
      translateX = '-58%';
      translateZ = -140;
      rotateY = 22;
      scale = 0.78;
      opacity = 0.62;
      zIndex = 20;
      filter = 'grayscale(100%) brightness(60%)';
    } else if (isNext) {
      translateX = '58%';
      translateZ = -140;
      rotateY = -22;
      scale = 0.78;
      opacity = 0.62;
      zIndex = 20;
      filter = 'grayscale(100%) brightness(60%)';
    } else {
      translateX = diff < 0 ? '-115%' : '115%';
      translateZ = -300;
      rotateY = diff < 0 ? 35 : -35;
      scale = 0.55;
      opacity = 0;
      zIndex = 10;
      pointerEvents = 'none';
    }

    return {
      translateX,
      translateZ,
      rotateY,
      scale,
      opacity,
      zIndex,
      filter,
      pointerEvents,
      isCenter,
      isPrev,
      isNext,
    };
  };

  return (
    <div
      ref={containerRef}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      tabIndex={0}
      role="region"
      aria-label="3D Featured Web Projects Carousel"
      className="relative mx-auto w-full max-w-6xl select-none outline-none focus-visible:ring-1 focus-visible:ring-brand/40"
    >
      {/* 3D Prism Stage */}
      <div className="relative mx-auto h-[260px] sm:h-[340px] md:h-[420px] lg:h-[460px] w-full overflow-visible [perspective:1400px]">
        {/* Subtle stage spotlight aura */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[280px] w-[90%] max-w-[700px] rounded-full bg-brand/10 blur-[90px]" />

        <div className="relative h-full w-full [transform-style:preserve-3d]">
          {items.map((project, idx) => {
            const style = getCardStyle(idx);

            return (
              <motion.div
                key={project.title}
                animate={{
                  x: style.translateX,
                  z: style.translateZ,
                  rotateY: style.rotateY,
                  scale: style.scale,
                  opacity: style.opacity,
                  filter: style.filter,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 280,
                  damping: 28,
                  mass: 0.8,
                }}
                style={{
                  zIndex: style.zIndex,
                  pointerEvents: style.pointerEvents,
                }}
                onClick={() => {
                  if (style.isPrev) prev();
                  if (style.isNext) next();
                }}
                drag={style.isCenter ? 'x' : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={handleDragEnd}
                className={`absolute left-1/2 top-1/2 h-[220px] sm:h-[300px] md:h-[380px] lg:h-[420px] w-[88vw] max-w-[360px] sm:max-w-[520px] md:max-w-[640px] lg:max-w-[720px] -translate-x-1/2 -translate-y-1/2 cursor-grab active:cursor-grabbing ${
                  !style.isCenter ? 'cursor-pointer hover:opacity-85' : ''
                }`}
              >
                {/* Outer frame matching Glass Surface aesthetic */}
                <div
                  className={`glass-surface group relative h-full w-full overflow-hidden rounded-2xl transition-all duration-300 ${
                    style.isCenter
                      ? 'border-brand/60 shadow-[0_20px_50px_-12px_rgba(59,130,246,0.35)]'
                      : 'hover:border-brand/30'
                  }`}
                >
                  {/* Browser Mockup Top Bar */}
                  <div className="flex h-8 sm:h-9 items-center justify-between border-b border-line bg-deep/60 px-3 sm:px-4 backdrop-blur-md">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <span className="h-2 sm:h-2.5 w-2 sm:w-2.5 rounded-full bg-rose-500/80" />
                      <span className="h-2 sm:h-2.5 w-2 sm:w-2.5 rounded-full bg-amber-400/80" />
                      <span className="h-2 sm:h-2.5 w-2 sm:w-2.5 rounded-full bg-emerald-400/80" />
                    </div>

                    {/* URL Mockup Pill */}
                    <div className="glass-pill flex max-w-[200px] sm:max-w-[320px] items-center gap-1.5 truncate rounded-lg px-2.5 py-0.5 text-[10px] sm:text-xs text-slate-400">
                      <svg
                        className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-emerald-400 shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="truncate font-mono">
                        {project.link
                          ? project.link.replace(/^https?:\/\//, '').replace(/\/$/, '')
                          : 'internal-institutional.local'}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                        {formatIndex(idx + 1)} / {formatIndex(total)}
                      </span>
                    </div>
                  </div>

                  {/* Screenshot Canvas Image */}
                  <div className="relative h-[calc(100%-2rem)] sm:h-[calc(100%-2.25rem)] w-full overflow-hidden bg-night">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                    />

                    {/* Signature React Bits Pro Prism Chromatic Sweep overlay */}
                    {style.isCenter && (
                      <motion.div
                        key={`sweep-${sweepKey}`}
                        initial={{ x: '-150%', opacity: 0.8 }}
                        animate={{ x: '180%', opacity: 0 }}
                        transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
                        className="pointer-events-none absolute inset-0 z-20 h-full w-full bg-gradient-to-r from-transparent via-white/35 to-brand/40 mix-blend-screen"
                        style={{
                          transform: 'skewX(-20deg)',
                        }}
                      />
                    )}

                    {/* Gradient shade on bottom of screenshot for contrast */}
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-panel/90 via-panel/30 to-transparent" />

                    {/* Quick Link Badge Overlay for Active Card */}
                    {style.isCenter && project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="btn-primary-glass absolute bottom-4 right-4 z-30 inline-flex items-center gap-2 px-3.5 py-1.5 text-xs"
                      >
                        <span>{labels.visit || 'Visit Live'}</span>
                        <svg
                          className="h-3.5 w-3.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2.5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 4.5L21 12l-7.5 7.5M21 12H3"
                          />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Navigation Controls Bar */}
      <div className="glass-surface mt-8 sm:mt-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl px-4 py-3 sm:px-6">
        {/* Left: Previous Button & Drag Hint */}
        <div className="flex items-center gap-3">
          <button
            onClick={prev}
            aria-label="Previous project"
            className="glass-pill flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl text-white transition hover:border-brand hover:bg-brand hover:text-ink active:scale-95"
          >
            <svg
              className="h-4 w-4 sm:h-5 sm:w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          <span className="hidden sm:inline-block text-xs font-medium text-slate-400">
            {labels.dragHint || 'Drag or use arrows to navigate'}
          </span>
        </div>

        {/* Center: Numeric Counter & Interactive Dot Pills */}
        <div className="flex items-center gap-3 sm:gap-4">
          <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
            <span className="text-brand">{formatIndex(activeIndex + 1)}</span>
            <span className="mx-1.5 text-slate-500">/</span>
            <span className="text-slate-400">{formatIndex(total)}</span>
          </span>

          <div className="flex items-center gap-1.5">
            {items.map((item, idx) => (
              <button
                key={item.title}
                onClick={() => goTo(idx)}
                aria-label={`Jump to ${item.title}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === idx
                    ? 'w-6 sm:w-8 bg-brand'
                    : 'w-2 bg-line hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right: Next Button & Autoplay Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            aria-label={isPlaying ? 'Pause autoplay' : 'Start autoplay'}
            title={isPlaying ? 'Pause autoplay' : 'Start autoplay'}
            className={`glass-pill flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl text-xs font-bold transition ${
              isPlaying
                ? 'border-brand/60 bg-brand/15 text-brand'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            {isPlaying ? (
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>

          <button
            onClick={next}
            aria-label="Next project"
            className="glass-pill flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl text-white transition hover:border-brand hover:bg-brand hover:text-ink active:scale-95"
          >
            <svg
              className="h-4 w-4 sm:h-5 sm:w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>

      {/* Active Project Details Showcase */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeProject.title}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="card mt-6 p-6 sm:p-8"
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="max-w-3xl space-y-3">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="project-tag tag-web">{activeProject.tag}</span>
                {activeProject.subtitle && (
                  <span className="text-xs font-semibold uppercase tracking-wider text-brand-soft">
                    {activeProject.subtitle}
                  </span>
                )}
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">
                {activeProject.title}
              </h3>

              <p className="text-sm sm:text-base leading-relaxed text-slate-300">
                {activeProject.description}
              </p>

              {/* Tech Stack Chips */}
              <div className="pt-2 flex flex-wrap gap-2">
                {activeProject.tech.map((t) => (
                  <span key={t} className="stack-chip">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Direct Action Link */}
            <div className="shrink-0 pt-2 md:pt-0">
              {activeProject.link ? (
                <a
                  href={activeProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary-glass inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm"
                >
                  <span>{labels.visit || 'Visit Live Website'}</span>
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </a>
              ) : (
                <div className="glass-pill inline-flex items-center gap-2 rounded-xl px-5 py-3 text-xs font-bold uppercase tracking-wider text-slate-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  <span>{labels.internalSystem || 'Internal Institutional System'}</span>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
