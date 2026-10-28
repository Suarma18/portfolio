import { useLang } from '../lib/i18n';
import { meta } from '../data/content';
import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';

export default function About() {
  const { t } = useLang();
  const a = t.about;

  return (
    <section id="about" className="section-padding section-stream">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading title={a.title} highlight={a.highlight} />

        <div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr]">
          <div className="space-y-5">
            {a.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p className="text-[15px] leading-relaxed text-slate-400">{p}</p>
              </Reveal>
            ))}

            <Reveal delay={0.2} className="pt-4">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                {a.interestsLabel}
              </p>
              <div className="flex flex-wrap gap-2.5">
                {a.interests.map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="space-y-5">
            <Reveal delay={0.1}>
              <article className="card p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-brand">{a.quickFacts}</p>
                <dl className="mt-4 space-y-3.5">
                  {a.facts.map((f) => (
                    <div key={f.label} className="flex items-center justify-between gap-4 border-b border-line pb-3 last:border-0 last:pb-0">
                      <dt className="text-sm text-slate-400">{f.label}</dt>
                      <dd className="text-right text-sm font-semibold text-white">{f.value}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            </Reveal>

            <Reveal delay={0.2}>
              <a
                href={`mailto:${meta.email}`}
                className="card gradient-border p-6 flex items-center justify-between gap-4 group"
              >
                <span>
                  <span className="block text-xs uppercase tracking-wider text-slate-500">{a.statusLabel}</span>
                  <span className="mt-1 block font-display font-semibold text-white">{a.statusValue}</span>
                </span>
                <span className="relative flex h-3 w-3 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-brand" />
                </span>
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
