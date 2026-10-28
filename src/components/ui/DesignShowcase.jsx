import { useState, useEffect, useCallback, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const BASE = '/images/projects/Portfolio%20Desain';

export const DESIGN_GALLERIES = {
  [`${BASE}/Desain%20Sosial%20Media%20UPT%20TIPD/siskap.jpg`]: {
    canvaUrl: 'https://canva.link/nnzr2lsw4e0fs4e',
    slides: [
      `${BASE}/Desain%20Sosial%20Media%20UPT%20TIPD/UPT%20Teknologi%20Informasi%20dan%20Pangkalan%20Data%20(1).jpg`,
      `${BASE}/Desain%20Sosial%20Media%20UPT%20TIPD/UPT%20Teknologi%20Informasi%20dan%20Pangkalan%20Data%20(2).jpg`,
      `${BASE}/Desain%20Sosial%20Media%20UPT%20TIPD/siskap.jpg`,
      `${BASE}/Desain%20Sosial%20Media%20UPT%20TIPD/Ucapan%20Nyepi%20(1).jpg`,
      `${BASE}/Desain%20Sosial%20Media%20UPT%20TIPD/Idul%20adha.jpg`,
      `${BASE}/Desain%20Sosial%20Media%20UPT%20TIPD/Ucapan%20Dirgahayu.jpg`,
      `${BASE}/Desain%20Sosial%20Media%20UPT%20TIPD/Ucapan%20Maulid%20Nabi.jpg`,
      `${BASE}/Desain%20Sosial%20Media%20UPT%20TIPD/Ucapan%20Wisuda%20(1).jpg`,
      `${BASE}/Desain%20Sosial%20Media%20UPT%20TIPD/Ucapan%20Wisuda%20(3).jpg`,
      `${BASE}/Desain%20Sosial%20Media%20UPT%20TIPD/Hari%20Waisak.jpg`,
      `${BASE}/Desain%20Sosial%20Media%20UPT%20TIPD/hari%20anak.jpg`,
      `${BASE}/Desain%20Sosial%20Media%20UPT%20TIPD/hari%20buruh.jpg`,
      `${BASE}/Desain%20Sosial%20Media%20UPT%20TIPD/kenaikan%20yesus%20kristus.jpg`,
    ],
  },
  [`${BASE}/Desain%20Sosial%20Media%20Tong%20Sampah%20Kesadaran/Instagram%20post%20-%203.png`]: {
    slides: [
      `${BASE}/Desain%20Sosial%20Media%20Tong%20Sampah%20Kesadaran/Instagram%20post%20-%203.png`,
      `${BASE}/Desain%20Sosial%20Media%20Tong%20Sampah%20Kesadaran/Instagram%20post%20-%201.jpg`,
      `${BASE}/Desain%20Sosial%20Media%20Tong%20Sampah%20Kesadaran/Instagram%20post%20-%202.jpg`,
      `${BASE}/Desain%20Sosial%20Media%20PKM/Artboard%201.png`,
      `${BASE}/Desain%20Sosial%20Media%20PKM/Artboard%202.png`,
      `${BASE}/Desain%20Sosial%20Media%20PKM/Artboard%203.png`,
      `${BASE}/Desain%20Sosial%20Media%20PKM/Artboard%204.png`,
      `${BASE}/Desain%20Sosial%20Media%20PKM/Artboard%205.png`,
      `${BASE}/Desain%20Sosial%20Media%20PKM/Artboard%206.png`,
    ],
  },
  [`${BASE}/Desain%20Sosial%20Media%20Galerie/Package_01.jpg`]: {
    slides: [
      `${BASE}/Desain%20Sosial%20Media%20Galerie/Package_01.jpg`,
      `${BASE}/Desain%20Sosial%20Media%20Galerie/Package_02.jpg`,
      `${BASE}/Desain%20Sosial%20Media%20Galerie/Package_03.jpg`,
      `${BASE}/Desain%20Sosial%20Media%20Galerie/post2_01.jpg`,
      `${BASE}/Desain%20Sosial%20Media%20Galerie/post2_02.jpg`,
      `${BASE}/Desain%20Sosial%20Media%20Galerie/post2_03.jpg`,
      `${BASE}/Desain%20Sosial%20Media%20Galerie/Untitled-2_01.jpg`,
      `${BASE}/Desain%20Sosial%20Media%20Galerie/Untitled-2_02.jpg`,
      `${BASE}/Desain%20Sosial%20Media%20Galerie/Untitled-2_03.jpg`,
      `${BASE}/Desain%20Sosial%20Media%20Galerie/1.1.jpg`,
      `${BASE}/Desain%20Sosial%20Media%20Galerie/1.2.jpg`,
      `${BASE}/Desain%20Sosial%20Media%20Galerie/1.3.jpg`,
    ],
  },
  [`${BASE}/Desain%20Logo/Auza-03.jpg`]: {
    slides: [
      `${BASE}/Desain%20Logo/Auza-03.jpg`,
      `${BASE}/Desain%20Logo/Logo%20Bu%20Dayu%201.png`,
      `${BASE}/Desain%20Logo/logo%20cts.png`,
      `${BASE}/Desain%20Logo/Logo%20PTIPD.png`,
      `${BASE}/Desain%20Logo/Desain%20Logo%20Polaritas%20Seven%20Star.png`,
      `${BASE}/Desain%20Logo/Rong.png`,
      `${BASE}/Desain%20Logo/Song%20Vrs.%202.png`,
      `${BASE}/Desain%20Logo/Song%20Vrs.%204.png`,
      `${BASE}/Desain%20Logo/tallocrapt.png`,
    ],
  },
  [`${BASE}/Desain%20Logo/malini-01.png`]: {
    slides: [
      `${BASE}/Desain%20Logo/malini-01.png`,
      `${BASE}/Desain%20Logo/Logo%20PTIPD.png`,
      `${BASE}/Desain%20Logo/Desain%20Logo%20Polaritas%20Seven%20Star.png`,
      `${BASE}/Desain%20Logo/Rong.png`,
      `${BASE}/Desain%20Logo/Song%20Vrs.%202.png`,
      `${BASE}/Desain%20Logo/Song%20Vrs.%204.png`,
      `${BASE}/Desain%20Logo/Logo%20Bu%20Dayu%201.png`,
      `${BASE}/Desain%20Logo/logo%20cts.png`,
      `${BASE}/Desain%20Logo/tallocrapt.png`,
    ],
  },
  [`${BASE}/Desain%20Sosial%20Media%20Direktorat%20Kampus%20Stikom%20Bali/HKI_07.png`]: {
    slides: [
      `${BASE}/Desain%20Sosial%20Media%20Direktorat%20Kampus%20Stikom%20Bali/HKI_01.png`,
      `${BASE}/Desain%20Sosial%20Media%20Direktorat%20Kampus%20Stikom%20Bali/HKI_02.png`,
      `${BASE}/Desain%20Sosial%20Media%20Direktorat%20Kampus%20Stikom%20Bali/HKI_03.png`,
      `${BASE}/Desain%20Sosial%20Media%20Direktorat%20Kampus%20Stikom%20Bali/HKI_04.png`,
      `${BASE}/Desain%20Sosial%20Media%20Direktorat%20Kampus%20Stikom%20Bali/HKI_05.png`,
      `${BASE}/Desain%20Sosial%20Media%20Direktorat%20Kampus%20Stikom%20Bali/HKI_06.png`,
      `${BASE}/Desain%20Sosial%20Media%20Direktorat%20Kampus%20Stikom%20Bali/HKI_07.png`,
      `${BASE}/Desain%20Sosial%20Media%20Direktorat%20Kampus%20Stikom%20Bali/HKI_08.png`,
      `${BASE}/Desain%20Sosial%20Media%20Direktorat%20Kampus%20Stikom%20Bali/HKI_09.png`,
    ],
  },
  [`${BASE}/Desain%20Sosial%20Media%20Self%20Studio/Self%20Studio-01.png`]: {
    slides: [
      `${BASE}/Desain%20Sosial%20Media%20Self%20Studio/Self%20Studio-01.png`,
      `${BASE}/Desain%20Sosial%20Media%20Self%20Studio/Self%20Studio-02.png`,
      `${BASE}/Desain%20Sosial%20Media%20Self%20Studio/Self%20Studio-03.png`,
      `${BASE}/Desain%20Sosial%20Media%20Self%20Studio/Self%20Studio-04.png`,
    ],
  },
  [`${BASE}/Desain%20Sosial%20Media%20UKM%20Mutimedia/Open-REC_01.jpg`]: {
    slides: [
      `${BASE}/Desain%20Sosial%20Media%20UKM%20Mutimedia/Open-REC_01.jpg`,
      `${BASE}/Desain%20Sosial%20Media%20UKM%20Mutimedia/Open-REC_02.jpg`,
      `${BASE}/Desain%20Sosial%20Media%20UKM%20Mutimedia/Open-REC_03.jpg`,
    ],
  },
  [`${BASE}/Desain%20Sosial%20Media%20Desain%20Enthusiast/nissan.jpg`]: {
    slides: [
      `${BASE}/Desain%20Sosial%20Media%20Desain%20Enthusiast/nissan.jpg`,
      `${BASE}/Desain%20Sosial%20Media%20Desain%20Enthusiast/365.jpg`,
      `${BASE}/Desain%20Sosial%20Media%20Desain%20Enthusiast/Harbour2.jpg`,
      `${BASE}/Desain%20Sosial%20Media%20Desain%20Enthusiast/Gojo.jpg`,
      `${BASE}/Desain%20Sosial%20Media%20Desain%20Enthusiast/Artboard%202.png`,
    ],
  },
};

function getProjectGallery(project) {
  const entry = DESIGN_GALLERIES[project.image];
  return {
    slides: project.gallery || entry?.slides || [project.image],
    canvaUrl: project.link || entry?.canvaUrl || '',
  };
}

function LightboxModal({ project, labels, onClose }) {
  const { slides, canvaUrl } = getProjectGallery(project);
  const [idx, setIdx] = useState(0);
  const total = slides.length;
  const closeBtnRef = useRef(null);
  const triggerRef = useRef(null);

  const prev = useCallback(() => {
    setIdx((i) => (i - 1 + total) % total);
  }, [total]);

  const next = useCallback(() => {
    setIdx((i) => (i + 1) % total);
  }, [total]);

  useEffect(() => {
    triggerRef.current = document.activeElement;
    closeBtnRef.current?.focus();

    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
      if (triggerRef.current && typeof triggerRef.current.focus === 'function') {
        triggerRef.current.focus();
      }
    };
  }, [onClose, prev, next]);

  // Preload adjacent slides for instant navigation
  useEffect(() => {
    if (total <= 1) return;
    const nextIdx = (idx + 1) % total;
    const prevIdx = (idx - 1 + total) % total;
    [slides[nextIdx], slides[prevIdx]].forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [idx, slides, total]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22 }}
      onClick={onClose}
      className="fixed inset-0 z-[80] flex items-center justify-center bg-black/80 p-3 backdrop-blur-xl sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 12 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="glass-heavy relative flex max-h-[92dvh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl border border-line shadow-2xl lg:flex-row"
      >
        {/* Left / Top: Artwork Viewer Stage (Always Dark Cinema Backdrop) */}
        <div className="relative flex min-h-[300px] flex-1 items-center justify-center overflow-hidden bg-[#060a13]/95 p-4 sm:min-h-[440px] sm:p-8">
          <AnimatePresence mode="wait">
            <motion.img
              key={slides[idx]}
              src={slides[idx]}
              alt={`${project.title} — ${idx + 1}`}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.22 }}
              drag={total > 1 ? 'x' : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.18}
              onDragEnd={(_, info) => {
                if (info.offset.x < -50) next();
                else if (info.offset.x > 50) prev();
              }}
              className={`max-h-[52dvh] w-auto max-w-full rounded-xl object-contain shadow-[0_20px_50px_rgba(0,0,0,0.65)] lg:max-h-[74dvh] ${
                total > 1 ? 'cursor-grab active:cursor-grabbing' : ''
              }`}
              draggable={false}
            />
          </AnimatePresence>

          {total > 1 && (
            <>
              <button
                type="button"
                onClick={prev}
                aria-label="Previous slide"
                className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#ffffff]/20 bg-[#060a13]/75 text-[#f8fafc] backdrop-blur-md transition hover:border-brand hover:bg-brand hover:text-ink active:scale-95 sm:left-4 sm:h-11 sm:w-11"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next slide"
                className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#ffffff]/20 bg-[#060a13]/75 text-[#f8fafc] backdrop-blur-md transition hover:border-brand hover:bg-brand hover:text-ink active:scale-95 sm:right-4 sm:h-11 sm:w-11"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </>
          )}

          {/* Slide Counter Pill */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full border border-[#ffffff]/20 bg-[#060a13]/80 px-3.5 py-1 font-mono text-xs font-bold text-[#f8fafc] backdrop-blur-md">
            <span className="text-brand">{String(idx + 1).padStart(2, '0')}</span>
            <span className="mx-1.5 text-[#94a3b8]">/</span>
            <span>{String(total).padStart(2, '0')}</span>
          </div>
        </div>

        {/* Right / Bottom: Project Info & Filmstrip Sidebar */}
        <div className="flex w-full flex-col justify-between border-t border-line p-5 sm:p-7 lg:w-[340px] lg:border-l lg:border-t-0">
          <div>
            <div className="flex items-start justify-between gap-3">
              <span className="section-tag !mb-0">{project.tag}</span>
              <button
                ref={closeBtnRef}
                type="button"
                onClick={onClose}
                aria-label="Close gallery"
                className="glass-pill flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-slate-300 transition hover:border-brand hover:text-brand"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <h3 className="mt-4 font-display text-xl font-bold leading-snug text-white sm:text-2xl">
              {project.title}
            </h3>

            <p className="mt-2.5 text-xs leading-relaxed text-slate-300 sm:text-sm">
              {project.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <span key={t} className="stack-chip">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 space-y-4">
            {/* Thumbnail Filmstrip */}
            {total > 1 && (
              <div>
                <p className="mb-2 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  {labels?.slidesLabel || 'Collection Slides'} ({total})
                </p>
                <div className="flex gap-2 overflow-x-auto pb-1.5">
                  {slides.map((src, i) => (
                    <button
                      key={src}
                      type="button"
                      onClick={() => setIdx(i)}
                      className={`relative h-14 w-14 shrink-0 overflow-hidden rounded-xl border-2 transition ${
                        idx === i
                          ? 'border-brand ring-2 ring-brand/30'
                          : 'border-transparent opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={src}
                        alt=""
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {canvaUrl && (
              <a
                href={canvaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-glass flex w-full items-center justify-center gap-2 py-3 text-xs"
              >
                <span>{labels?.streamCta || 'Open Board on Canva'}</span>
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function DesignShowcase({ items = [], labels = {} }) {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['ALL', ...Array.from(new Set(items.map((it) => it.tag)))];
  const filtered =
    activeCategory === 'ALL'
      ? items
      : items.filter((it) => it.tag === activeCategory);

  return (
    <div className="space-y-8">
      {/* Sub-Category Filter Bar + Direct Canva Board Link */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div
          role="tablist"
          aria-label="Design category filter"
          className="flex flex-wrap items-center gap-2"
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            const label = cat === 'ALL' ? labels.allWorks || 'All Works' : cat;
            const count =
              cat === 'ALL'
                ? items.length
                : items.filter((it) => it.tag === cat).length;

            return (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(cat)}
                className={`relative inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold uppercase tracking-wider transition ${
                  isActive
                    ? 'bg-brand text-ink shadow-[0_6px_18px_-4px_rgba(59,130,246,0.55)]'
                    : 'glass-pill text-slate-300 hover:border-brand/40 hover:text-brand'
                }`}
              >
                <span>{label}</span>
                <span
                  className={`rounded-full px-1.5 py-0.5 text-[10px] ${
                    isActive ? 'bg-black/15 text-ink' : 'bg-brand/10 text-slate-400'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {labels.streamUrl && (
          <a
            href={labels.streamUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost inline-flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider"
          >
            <span className="h-2 w-2 rounded-full bg-brand" />
            <span>{labels.streamCta || 'Explore Canva Board'}</span>
            <svg className="h-3.5 w-3.5 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        )}
      </div>

      {/* Bento Studio Grid */}
      <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, index) => {
            const { slides, canvaUrl } = getProjectGallery(project);
            const isFeatured = activeCategory === 'ALL' && index === 0;
            const previewSlides = slides.slice(0, 3);

            return (
              <motion.article
                layout
                key={project.title}
                initial={{ opacity: 0, y: 20, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.32, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => setSelectedProject(project)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedProject(project);
                  }
                }}
                role="button"
                tabIndex={0}
                className={`card group relative flex cursor-pointer flex-col overflow-hidden p-4 sm:p-5 ${
                  isFeatured
                    ? 'sm:col-span-2 lg:col-span-2 lg:grid lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-7'
                    : ''
                }`}
              >
                {/* Artwork Stage with Stacked Fan Preview */}
                <div
                  className={`relative w-full overflow-hidden rounded-2xl bg-deep/70 ${
                    isFeatured ? 'aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3]' : 'aspect-[4/4.4]'
                  }`}
                >
                  {/* Secondary Stacked Slide Peeking Behind on Hover */}
                  {previewSlides[2] && (
                    <img
                      src={previewSlides[2]}
                      alt=""
                      loading="lazy"
                      draggable={false}
                      className="pointer-events-none absolute inset-3 h-[calc(100%-1.5rem)] w-[calc(100%-1.5rem)] rounded-xl object-cover opacity-0 shadow-lg transition-all duration-500 group-hover:translate-x-3 group-hover:-translate-y-2 group-hover:rotate-3 group-hover:opacity-45"
                    />
                  )}
                  {previewSlides[1] && (
                    <img
                      src={previewSlides[1]}
                      alt=""
                      loading="lazy"
                      draggable={false}
                      className="pointer-events-none absolute inset-2 h-[calc(100%-1rem)] w-[calc(100%-1rem)] rounded-xl object-cover opacity-0 shadow-lg transition-all duration-500 group-hover:-translate-x-2.5 group-hover:-translate-y-1.5 group-hover:-rotate-2 group-hover:opacity-65"
                    />
                  )}

                  {/* Main Cover Artwork */}
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    draggable={false}
                    className="relative z-10 h-full w-full rounded-2xl object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />

                  {/* Subtle Top & Bottom Vignette */}
                  <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-black/70 via-transparent to-black/30 opacity-80 transition-opacity duration-300 group-hover:opacity-95" />

                  {/* Top Badges */}
                  <div className="absolute inset-x-3 top-3 z-30 flex items-center justify-between gap-2">
                    <span className="rounded-full border border-[#ffffff]/20 bg-[#060a13]/75 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#f8fafc] backdrop-blur-md">
                      {project.tag}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-[#ffffff]/20 bg-[#060a13]/75 px-2.5 py-1 text-[10px] font-bold text-[#60a5fa] backdrop-blur-md">
                      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5z" />
                      </svg>
                      {slides.length} {slides.length > 1 ? labels.slidesUnit || 'Slides' : 'Slide'}
                    </span>
                  </div>

                  {/* Bottom Hover Action Pill */}
                  <div className="absolute inset-x-3 bottom-3 z-30 flex items-center justify-between">
                    <div className="flex -space-x-2 overflow-hidden">
                      {slides.slice(0, 4).map((thumb, ti) => (
                        <img
                          key={thumb}
                          src={thumb}
                          alt=""
                          loading="lazy"
                          className="h-7 w-7 rounded-lg border border-[#ffffff]/30 object-cover shadow"
                          style={{ zIndex: 10 - ti }}
                        />
                      ))}
                      {slides.length > 4 && (
                        <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-[#ffffff]/25 bg-[#060a13]/80 text-[10px] font-bold text-[#f8fafc] backdrop-blur-md">
                          +{slides.length - 4}
                        </span>
                      )}
                    </div>

                    <span className="inline-flex items-center gap-1.5 rounded-xl border border-[#ffffff]/20 bg-[#060a13]/75 px-3 py-1.5 text-[11px] font-bold text-[#f8fafc] backdrop-blur-md transition group-hover:border-brand group-hover:bg-brand group-hover:text-ink">
                      <span>{labels.inspectGallery || 'View Gallery'}</span>
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                      </svg>
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className={`flex flex-1 flex-col justify-between ${isFeatured ? 'mt-5 lg:mt-0' : 'mt-4'}`}>
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <h3
                        className={`font-display font-bold tracking-tight text-white transition-colors group-hover:text-brand ${
                          isFeatured ? 'text-xl sm:text-2xl' : 'text-lg'
                        }`}
                      >
                        {project.title}
                      </h3>
                      {canvaUrl && (
                        <span className="shrink-0 rounded-md bg-brand/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-brand">
                          Canva
                        </span>
                      )}
                    </div>

                    <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-slate-400 sm:text-sm">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-1.5 pt-1">
                    {project.tech.map((t) => (
                      <span key={t} className="stack-chip">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Interactive Multi-Slide Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <LightboxModal
            project={selectedProject}
            labels={labels}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

