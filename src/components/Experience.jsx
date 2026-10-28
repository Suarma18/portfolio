import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLang } from '../lib/i18n';
import SectionHeading from './ui/SectionHeading';
import { fadeUp } from '../lib/motion';

function ExperienceItem({ item, index }) {
  const isLatest = index === 0;
  const isRecent = index < 3;
  return (
    <motion.li
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: index * 0.1 }}
      className="timeline-item"
    >
      <span className={`timeline-dot ${isLatest ? 'dot-brand' : isRecent ? 'dot-grape' : ''}`} />
      <div className="timeline-card card p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h3 className="font-display font-semibold text-white">{item.role}</h3>
          <span className={`badge-year ${isLatest ? 'badge-active' : ''}`}>
            {item.period}
          </span>
        </div>
        <p className="mt-1 text-sm font-medium text-brand">{item.org}</p>
        {item.points?.length > 0 && (
          <ul className="mt-4 space-y-2">
            {item.points.map((point) => (
              <li key={point} className="flex gap-2.5 text-sm leading-relaxed text-slate-400">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-brand" />
                {point}
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.li>
  );
}

function EducationItem({ item, index }) {
  const isLatest = index === 0;
  return (
    <motion.li
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: index * 0.1 }}
      className="timeline-item"
    >
      <span className={`timeline-dot ${isLatest ? 'dot-brand' : ''}`} />
      <div className="timeline-card card p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h3 className="font-display font-semibold text-white">{item.degree}</h3>
          <span className={`badge-year ${isLatest ? 'badge-active' : ''}`}>
            {item.period}
          </span>
        </div>
        <p className="mt-1 text-sm font-medium text-brand">{item.school}</p>
        <p className="mt-3 text-sm leading-relaxed text-slate-400">{item.detail}</p>
      </div>
    </motion.li>
  );
}

export default function Experience() {
  const { t } = useLang();
  const j = t.journey;
  const [tab, setTab] = useState('experience');
  const items = tab === 'experience' ? j.experience : j.education;

  return (
    <section id="journey" className="section-padding section-stream">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title={j.title}
          highlight={j.highlight}
          subtitle={j.subtitle}
        />

        <div className="mb-14 flex justify-center">
          <div
            role="tablist"
            aria-label="Experience and education tabs"
            className="glass-surface inline-flex rounded-xl p-1.5"
          >
            {['experience', 'education'].map((id) => (
              <button
                key={id}
                type="button"
                role="tab"
                aria-selected={tab === id}
                onClick={() => setTab(id)}
                className={`relative rounded-lg px-8 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors sm:text-sm ${
                  tab === id ? 'text-ink' : 'text-slate-400 hover:text-brand'
                }`}
              >
                {tab === id && (
                  <motion.span
                    layoutId="journey-tab-pill"
                    className="absolute inset-0 rounded-lg bg-brand shadow-[0_4px_14px_-2px_rgba(59,130,246,0.5)]"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.55 }}
                  />
                )}
                <span className="relative z-10">{j.tabs[id]}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="relative mx-auto max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.ol
              key={`${tab}-${t.profile.greeting}`}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="timeline"
            >
              {items.map((item, i) =>
                tab === 'experience' ? (
                  <ExperienceItem key={`${item.role}-${item.period}`} item={item} index={i} />
                ) : (
                  <EducationItem key={item.degree} item={item} index={i} />
                )
              )}
            </motion.ol>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
