import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function ArchitectureModal({ project, labels, onClose }) {
  const closeBtnRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    triggerRef.current = document.activeElement;
    closeBtnRef.current?.focus();

    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
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
  }, [onClose]);

  if (!project) return null;

  const isLive = project.status === 'live' || Boolean(project.link);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22 }}
      onClick={onClose}
      className="fixed inset-0 z-[80] flex items-center justify-center bg-black/85 p-3 backdrop-blur-xl sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} - ${labels?.viewSpecs || 'Architecture & Specs'}`}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 12 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="glass-heavy relative flex max-h-[92dvh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl border border-line shadow-2xl lg:flex-row"
      >
        {/* Left: Full-Res Screenshot Stage */}
        <div className="relative flex min-h-[260px] flex-1 items-center justify-center overflow-hidden bg-[#060a13]/95 p-4 sm:min-h-[440px] sm:p-8">
          <img
            src={project.image}
            alt={project.title}
            className="max-h-[50dvh] w-auto max-w-full rounded-xl object-contain shadow-[0_20px_50px_rgba(0,0,0,0.7)] lg:max-h-[74dvh]"
            draggable={false}
          />

          {/* Top Live / Enterprise Beacon */}
          <div className="absolute left-4 top-4 z-20 flex items-center gap-2 rounded-full border border-[#ffffff]/20 bg-[#060a13]/80 px-3 py-1 text-xs font-bold backdrop-blur-md">
            {isLive ? (
              <>
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                <span className="text-[#34d399]">{labels?.liveProduction || 'Live Site'}</span>
              </>
            ) : (
              <>
                <span className="h-2 w-2 rounded-full bg-sky-400" />
                <span className="text-[#38bdf8]">{labels?.enterpriseSystem || 'Enterprise Gov'}</span>
              </>
            )}
          </div>
        </div>

        {/* Right: Technical Highlights & Specs Sidebar */}
        <div className="flex w-full flex-col justify-between overflow-y-auto border-t border-line p-5 sm:p-7 lg:w-[380px] lg:border-l lg:border-t-0">
          <div>
            <div className="flex items-start justify-between gap-3">
              <span className="project-tag tag-web">{project.tag}</span>
              <button
                ref={closeBtnRef}
                type="button"
                onClick={onClose}
                aria-label={labels?.closeModal || 'Close'}
                className="glass-pill flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-slate-300 transition hover:border-brand hover:text-brand"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <h3 className="mt-3 font-display text-xl font-bold leading-tight text-white sm:text-2xl">
              {project.title}
            </h3>

            {project.subtitle && (
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-brand-soft">
                {project.subtitle}
              </p>
            )}

            <p className="mt-3 text-xs leading-relaxed text-slate-300 sm:text-sm">
              {project.description}
            </p>

            {/* Architecture Overview */}
            {project.architecture && (
              <div className="mt-4 rounded-xl border border-line bg-deep/50 p-3.5 backdrop-blur-sm">
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  {labels?.securityTitle || 'Architecture & Deployment'}
                </p>
                <p className="mt-1 font-mono text-xs text-white">
                  {project.architecture}
                </p>
              </div>
            )}

            {/* Key Engineering Highlights */}
            {project.highlights?.length > 0 && (
              <div className="mt-4">
                <p className="mb-2 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  {labels?.keyFeaturesTitle || 'Key Engineering Highlights'}
                </p>
                <ul className="space-y-2">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs leading-relaxed text-slate-300">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Stack Chips */}
            <div className="mt-5 flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <span key={t} className="stack-chip">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Action CTA */}
          <div className="mt-6 pt-2">
            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-glass flex w-full items-center justify-center gap-2 py-3 text-xs"
              >
                <span>{labels?.openLiveSite || labels?.visit || 'Visit Live Site'}</span>
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            ) : (
              <div className="glass-pill flex w-full items-center justify-center gap-2 rounded-xl py-3 text-xs font-bold uppercase tracking-wider text-slate-400">
                <span className="h-2 w-2 rounded-full bg-sky-400" />
                <span>{labels?.internalSystem || 'Institutional Internal System'}</span>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function WebShowcase({ items = [], labels = {} }) {
  const [selectedProject, setSelectedProject] = useState(() => items[0] || null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [viewportMode, setViewportMode] = useState('desktop');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  // Sync selected project if items change
  useEffect(() => {
    if (items.length > 0 && !selectedProject) {
      setSelectedProject(items[0]);
    }
  }, [items, selectedProject]);

  const filterTabs = [
    { id: 'all', label: labels?.webFilters?.all || 'All Systems', count: items.length },
    {
      id: 'live',
      label: labels?.webFilters?.live || 'Live Production',
      count: items.filter((it) => it.status === 'live' || Boolean(it.link)).length,
    },
    {
      id: 'enterprise',
      label: labels?.webFilters?.enterprise || 'Enterprise Gov',
      count: items.filter((it) => it.status === 'enterprise' || !it.link).length,
    },
  ];

  const filteredItems = items.filter((it) => {
    if (activeFilter === 'live') return it.status === 'live' || Boolean(it.link);
    if (activeFilter === 'enterprise') return it.status === 'enterprise' || !it.link;
    return true;
  });

  // Ensure active project belongs to the current filter
  const active =
    filteredItems.find((it) => it.title === selectedProject?.title) ||
    filteredItems[0] ||
    items[0];

  const copyUrl = useCallback(async (url) => {
    if (!url) return;
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      const el = document.createElement('textarea');
      el.value = url;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, []);

  if (!items || items.length === 0) return null;

  const isLive = active?.status === 'live' || Boolean(active?.link);

  return (
    <div className="space-y-8">
      {/* Top Filter Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div
          role="tablist"
          aria-label="Filter web projects"
          className="flex flex-wrap items-center gap-2"
        >
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveFilter(tab.id)}
                className={`relative inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold uppercase tracking-wider transition ${
                  isActive
                    ? 'bg-brand text-ink shadow-[0_6px_18px_-4px_rgba(59,130,246,0.55)]'
                    : 'glass-pill text-slate-300 hover:border-brand/40 hover:text-brand'
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`rounded-full px-1.5 py-0.5 text-[10px] ${
                    isActive ? 'bg-black/15 text-ink' : 'bg-brand/10 text-slate-400'
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Status Legend */}
        <div className="hidden items-center gap-4 text-xs font-medium text-slate-400 sm:flex">
          <span className="inline-flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span>{labels?.liveProduction || 'Live Site'}</span>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-sky-400" />
            <span>{labels?.enterpriseSystem || 'Enterprise Gov'}</span>
          </span>
        </div>
      </div>

      {/* TIER 1: SPOTLIGHT HERO VIEWPORT (macOS Glass Studio) */}
      <AnimatePresence mode="wait">
        {active && (
          <motion.div
            key={active.title}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="card relative overflow-hidden rounded-3xl border border-line/80 p-0 shadow-2xl"
          >
            {/* macOS Browser Header Bar */}
            <div className="flex h-11 items-center justify-between border-b border-line bg-deep/70 px-4 sm:px-6 backdrop-blur-md">
              {/* Traffic Lights */}
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#ff5f56] shadow-inner transition hover:brightness-110" />
                <span className="h-3 w-3 rounded-full bg-[#ffbd2e] shadow-inner transition hover:brightness-110" />
                <span className="h-3 w-3 rounded-full bg-[#27c93f] shadow-inner transition hover:brightness-110" />
              </div>

              {/* URL Pill + Copy Action */}
              <div className="flex max-w-[240px] items-center gap-1.5 rounded-lg border border-line bg-panel/70 px-3 py-1 font-mono text-[11px] text-slate-300 sm:max-w-md">
                <svg
                  className={`h-3 w-3 shrink-0 ${isLive ? 'text-emerald-400' : 'text-sky-400'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="truncate">
                  {active.link
                    ? active.link.replace(/^https?:\/\//, '').replace(/\/$/, '')
                    : 'enterprise-institutional.internal'}
                </span>
                {active.link && (
                  <button
                    type="button"
                    onClick={() => copyUrl(active.link)}
                    title={copied ? labels?.linkCopied || 'Copied!' : labels?.copyLink || 'Copy URL'}
                    className="ml-1 text-slate-400 hover:text-white"
                  >
                    {copied ? (
                      <span className="text-[10px] font-bold text-emerald-400">{labels?.linkCopied || 'Copied!'}</span>
                    ) : (
                      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
                      </svg>
                    )}
                  </button>
                )}
              </div>

              {/* Viewport Frame Mode Switcher */}
              <div className="flex items-center gap-1 rounded-lg border border-line bg-panel/60 p-0.5">
                <button
                  type="button"
                  onClick={() => setViewportMode('desktop')}
                  title={labels?.viewportDesktop || 'Desktop 16:9'}
                  aria-label="Desktop view"
                  className={`flex h-6 w-6 items-center justify-center rounded-md transition ${
                    viewportMode === 'desktop'
                      ? 'bg-brand text-ink shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={() => setViewportMode('mobile')}
                  title={labels?.viewportMobile || 'Mobile Frame'}
                  aria-label="Mobile view"
                  className={`flex h-6 w-6 items-center justify-center rounded-md transition ${
                    viewportMode === 'mobile'
                      ? 'bg-brand text-ink shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Interactive Screen Stage */}
            <div className="relative flex min-h-[300px] items-center justify-center overflow-hidden bg-[#060a13]/95 p-4 sm:min-h-[420px] sm:p-8">
              {/* Subtle Ambient Glow */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-[260px] w-[80%] max-w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/15 blur-[95px]" />

              <motion.div
                layout
                transition={{ type: 'spring', stiffness: 280, damping: 28 }}
                className={`group relative overflow-hidden rounded-2xl border border-line bg-night shadow-[0_24px_60px_-15px_rgba(0,0,0,0.85)] ${
                  viewportMode === 'desktop'
                    ? 'aspect-[16/10] w-full max-w-[820px]'
                    : 'aspect-[9/14] w-[280px] sm:w-[320px]'
                }`}
              >
                <img
                  src={active.image}
                  alt={active.title}
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                  loading="lazy"
                />

                {/* Subtle vignette */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-85" />

                {/* Live Beacon Badge (Top Right) */}
                <div className="absolute right-3.5 top-3.5 z-20 flex items-center gap-2 rounded-full border border-[#ffffff]/20 bg-[#060a13]/80 px-3 py-1 text-xs font-bold backdrop-blur-md">
                  {isLive ? (
                    <>
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                      </span>
                      <span className="text-[#34d399]">{labels?.liveProduction || 'Live Site'}</span>
                    </>
                  ) : (
                    <>
                      <span className="h-2 w-2 rounded-full bg-sky-400" />
                      <span className="text-[#38bdf8]">{labels?.enterpriseSystem || 'Enterprise Gov'}</span>
                    </>
                  )}
                </div>

                {/* Bottom Overlay Action Pill */}
                <div className="absolute inset-x-3.5 bottom-3.5 z-20 flex items-center justify-between">
                  <span className="rounded-full border border-[#ffffff]/20 bg-[#060a13]/80 px-3 py-1 text-[11px] font-bold text-[#f8fafc] backdrop-blur-md">
                    {active.tag}
                  </span>

                  <button
                    type="button"
                    onClick={() => setIsModalOpen(true)}
                    className="inline-flex items-center gap-1.5 rounded-xl border border-[#ffffff]/25 bg-[#060a13]/80 px-3.5 py-1.5 text-xs font-bold text-[#f8fafc] backdrop-blur-md transition hover:border-brand hover:bg-brand hover:text-ink active:scale-95"
                  >
                    <span>{labels?.inspectScreenshot || 'Inspect View'}</span>
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            </div>

            {/* Spotlight Details Bottom Bar */}
            <div className="border-t border-line bg-panel/50 p-6 sm:p-8 backdrop-blur-md">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-3xl space-y-3">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="project-tag tag-web">{active.tag}</span>
                    {active.subtitle && (
                      <span className="text-xs font-semibold uppercase tracking-wider text-brand-soft">
                        {active.subtitle}
                      </span>
                    )}
                  </div>

                  <h3 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    {active.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
                    {active.description}
                  </p>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {active.tech.map((t) => (
                      <span key={t} className="stack-chip">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex shrink-0 flex-wrap items-center gap-3 pt-2 lg:pt-0">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(true)}
                    className="btn-ghost inline-flex items-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white"
                  >
                    <svg className="h-4 w-4 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                    </svg>
                    <span>{labels?.viewSpecs || 'Architecture & Specs'}</span>
                  </button>

                  {active.link ? (
                    <a
                      href={active.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary-glass inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm"
                    >
                      <span>{labels?.visit || 'Visit Live Site'}</span>
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12l-7.5 7.5M21 12H3" />
                      </svg>
                    </a>
                  ) : (
                    <div className="glass-pill inline-flex items-center gap-2 rounded-xl px-5 py-3 text-xs font-bold uppercase tracking-wider text-slate-400">
                      <span className="h-2 w-2 rounded-full bg-sky-400" />
                      <span>{labels?.internalSystem || 'Institutional Internal System'}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* TIER 2: INTERACTIVE BENTO MATRIX (All 6 Projects At A Glance) */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
            {labels?.allWorks || 'All Web Systems'} ({filteredItems.length})
          </p>
          <span className="text-[11px] text-slate-500">
            {labels?.dragHint ? 'Click any project to spotlight' : 'Pilih proyek untuk melihat di atas'}
          </span>
        </div>

        <motion.div layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((project, idx) => {
              const isCurrent = active?.title === project.title;
              const hasLink = Boolean(project.link);

              return (
                <motion.article
                  layout
                  key={project.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.28, delay: idx * 0.04, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => setSelectedProject(project)}
                  className={`card group relative flex cursor-pointer flex-col overflow-hidden p-4 sm:p-5 transition-all duration-300 ${
                    isCurrent
                      ? 'border-brand/80 ring-2 ring-brand/40 shadow-[0_12px_36px_-8px_rgba(59,130,246,0.4)]'
                      : 'hover:border-brand/40'
                  }`}
                >
                  {/* Thumbnail Stage */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-night">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                    />

                    {/* Gradient Overlay */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                    {/* Status Beacon & Tag */}
                    <div className="absolute inset-x-3 top-3 flex items-center justify-between gap-2">
                      <span className="rounded-full border border-[#ffffff]/20 bg-[#060a13]/75 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#f8fafc] backdrop-blur-md">
                        {project.tag}
                      </span>

                      <span className="inline-flex items-center gap-1.5 rounded-full border border-[#ffffff]/20 bg-[#060a13]/75 px-2.5 py-0.5 text-[10px] font-bold backdrop-blur-md">
                        {hasLink ? (
                          <>
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                            <span className="text-emerald-300">{labels?.liveProduction || 'Live'}</span>
                          </>
                        ) : (
                          <>
                            <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                            <span className="text-sky-300">{labels?.enterpriseSystem || 'Gov'}</span>
                          </>
                        )}
                      </span>
                    </div>

                    {/* Active Spotlight Indicator */}
                    {isCurrent && (
                      <div className="absolute inset-x-3 bottom-3 flex items-center justify-between">
                        <span className="inline-flex items-center gap-1 rounded-md bg-brand px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-ink shadow">
                          <span>Spotlight</span>
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Card Body */}
                  <div className="mt-4 flex flex-1 flex-col justify-between">
                    <div>
                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="text-left font-display text-base font-bold text-white transition-colors hover:text-brand focus-visible:text-brand sm:text-lg"
                      >
                        {project.title}
                      </button>
                      <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-slate-400">
                        {project.description}
                      </p>
                    </div>

                    <div className="mt-4 flex items-center justify-between pt-2">
                      <div className="flex flex-wrap gap-1">
                        {project.tech.slice(0, 2).map((t) => (
                          <span key={t} className="rounded-md border border-line bg-panel/60 px-2 py-0.5 text-[10px] text-slate-400">
                            {t}
                          </span>
                        ))}
                        {project.tech.length > 2 && (
                          <span className="rounded-md border border-line px-1.5 py-0.5 text-[10px] text-slate-500">
                            +{project.tech.length - 2}
                          </span>
                        )}
                      </div>

                      {hasLink ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-xs font-semibold text-brand hover:underline inline-flex items-center gap-1"
                        >
                          <span>{labels?.visit || 'Visit'}</span>
                          <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12l-7.5 7.5M21 12H3" />
                          </svg>
                        </a>
                      ) : (
                        <span className="text-[11px] font-semibold text-slate-500">Internal</span>
                      )}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Deep-Dive Architecture Lightbox Modal */}
      <AnimatePresence>
        {isModalOpen && active && (
          <ArchitectureModal
            project={active}
            labels={labels}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

