import { motion } from 'framer-motion';
import { useLang } from '../lib/i18n';
import { useTheme } from '../lib/theme';
import SectionHeading from './ui/SectionHeading';
import IconFolder, { SKILL_FOLDER_ICONS } from './ui/IconFolder';
import PixelCard from './ui/PixelCard';
import { ToolIcon } from './toolIcons';

export default function Skills() {
  const { t } = useLang();
  const { theme } = useTheme();
  const s = t.skills;
  const half = Math.ceil(s.tools.length / 2);
  const row1 = s.tools.slice(0, half);
  const row2 = s.tools.slice(half);
  const isLight = theme === 'light';

  return (
    <section id="skills" className="section-padding section-stream">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title={s.title}
          highlight={s.highlight}
          subtitle={s.subtitle}
        />

        <div className="grid place-items-center gap-10 md:grid-cols-2">
          {s.groups.map((group) => (
            <IconFolder
              key={group.id}
              theme={isLight ? 'light' : 'dark'}
              title={group.title}
              subtitle={group.blurb}
              tags={group.skills}
              icons={SKILL_FOLDER_ICONS[group.id] || SKILL_FOLDER_ICONS.web}
              spread={56}
              showPill={true}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16"
        >
          <PixelCard
            variant="blue"
            colors={
              isLight
                ? ['#2563eb', '#3b82f6', '#7c3aed']
                : ['#60a5fa', '#93c5fd', '#a78bfa']
            }
            glowColor={isLight ? '#3b82f6' : '#60a5fa'}
            shape="square"
            origin="pointer"
            gap={6}
            pixelSize={2}
            speed={35}
            revealDuration={650}
            spotlight={0.65}
            glow={0.5}
            opacity={0.42}
            fade={0.58}
            trigger="hover"
            radius={22}
            clickPulse
            intro
            theme={isLight ? 'light' : 'dark'}
            className="w-full px-5 py-8 sm:p-12"
          >
            <div className="relative mx-auto w-full min-w-0 max-w-3xl overflow-hidden text-center">
              <span className="section-tag">
                {s.toolboxKicker}
              </span>
              <h3 className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl">
                {s.toolboxTitle}
              </h3>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-400">
                {s.toolboxSub}
              </p>

              <div className="marquee-fade mt-8 w-full space-y-3 overflow-hidden">
                <div className="marquee-paused">
                  <div className="marquee-track" style={{ '--marquee-duration': '30s' }}>
                    {[...row1, ...row1].map((tool, i) => (
                      <span
                        key={`row1-${tool}-${i}`}
                        className="glass-pill group/tool inline-flex shrink-0 items-center gap-2.5 rounded-xl px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-300 transition-colors duration-200 hover:border-brand/50 hover:bg-brand/10 hover:text-white sm:px-5 sm:py-2.5"
                      >
                        <ToolIcon name={tool} />
                        <span>{tool}</span>
                      </span>
                    ))}
                  </div>
                </div>
                <div className="marquee-paused">
                  <div className="marquee-track marquee-reverse" style={{ '--marquee-duration': '36s' }}>
                    {[...row2, ...row2].map((tool, i) => (
                      <span
                        key={`row2-${tool}-${i}`}
                        className="glass-pill group/tool inline-flex shrink-0 items-center gap-2.5 rounded-xl px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-300 transition-colors duration-200 hover:border-grape/50 hover:bg-grape/10 hover:text-white sm:px-5 sm:py-2.5"
                      >
                        <ToolIcon name={tool} />
                        <span>{tool}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </PixelCard>
        </motion.div>
      </div>
    </section>
  );
}
