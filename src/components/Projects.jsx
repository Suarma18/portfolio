import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLang } from '../lib/i18n';
import SectionHeading from './ui/SectionHeading';
import PrismCarousel from './ui/PrismCarousel';
import DesignShowcase from './ui/DesignShowcase';

export default function Projects() {
  const { lang, t } = useLang();
  const p = t.projects;
  const [tab, setTab] = useState('web');
  const visible = p.items.filter((item) => item.category === tab);

  return (
    <section id="projects" className="section-padding section-stream">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          title={p.title}
          highlight={p.highlight}
          subtitle={p.subtitle}
        />

        <div className="mb-10 flex justify-center">
          <div
            role="tablist"
            aria-label="Project categories"
            className="glass-surface inline-flex flex-wrap justify-center gap-1 rounded-xl p-1.5"
          >
            {p.tabs.map((tb) => (
              <button
                key={tb.id}
                type="button"
                role="tab"
                aria-selected={tab === tb.id}
                onClick={() => setTab(tb.id)}
                className={`relative rounded-lg px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors sm:text-sm ${
                  tab === tb.id ? 'text-ink' : 'text-slate-400 hover:text-brand'
                }`}
              >
                {tab === tb.id && (
                  <motion.span
                    layoutId="project-tab-pill"
                    className="absolute inset-0 rounded-lg bg-brand shadow-[0_4px_14px_-2px_rgba(59,130,246,0.5)]"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.55 }}
                  />
                )}
                <span className="relative z-10">{tb.label}</span>
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          {tab === 'web' ? (
            <motion.div
              key={`web-carousel-${lang}`}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <PrismCarousel items={visible} labels={p.labels} />
            </motion.div>
          ) : (
            <motion.div
              key={`design-showcase-${lang}`}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <DesignShowcase items={visible} labels={p.labels} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
