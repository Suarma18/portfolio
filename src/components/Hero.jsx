import { useState, useEffect, useRef } from 'react';
import { animate, motion, useInView } from 'framer-motion';
import { useLang } from '../lib/i18n';
import { useTheme } from '../lib/theme';
import { meta } from '../data/content';
import { socials } from './socialIcons';
import { fadeUp, staggerContainer, scaleIn } from '../lib/motion';
import GradientASCII from './ui/GradientASCII';
import ProfileCard from './ui/ProfileCard';

function Typewriter({ words }) {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    setText('');
    setIsDeleting(false);
    setLoopNum(0);
  }, [words]);

  useEffect(() => {
    let timer;
    const handleType = () => {
      const i = loopNum % words.length;
      const fullText = words[i] || '';

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      let typeSpeed = isDeleting ? 45 : 85;

      if (!isDeleting && text === fullText) {
        typeSpeed = 1800;
        setIsDeleting(true);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum((prev) => prev + 1);
        typeSpeed = 350;
      }

      timer = setTimeout(handleType, typeSpeed);
    };

    timer = setTimeout(handleType, 85);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, words]);

  return <span>{text}</span>;
}

function Counter({ to }) {
  const ref = useRef(null);

  useEffect(() => {
    const controls = animate(0, to, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = Math.round(v);
      },
    });
    return () => controls.stop();
  }, [to]);

  return <span ref={ref}>0</span>;
}

function StatCounter({ value }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const numeric = parseInt(value.replace(/\D/g, ''), 10) || 0;
  const hasPlus = value.includes('+');

  return (
    <dd ref={ref} className="font-display text-2xl font-bold text-white">
      {inView ? (
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Counter to={numeric} />
          {hasPlus && <span className="text-brand">+</span>}
        </motion.span>
      ) : (
        <>
          0{hasPlus && <span className="text-brand">+</span>}
        </>
      )}
    </dd>
  );
}

export default function Hero() {
  const { t } = useLang();
  const { theme } = useTheme();
  const p = t.profile;

  return (
    <section
      id="home"
      className="relative flex min-h-[100dvh] items-center overflow-hidden pt-24 pb-16"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid mask-fade-b opacity-25" />
      <div className="pointer-events-none absolute inset-0 mask-fade-b overflow-hidden">
        <GradientASCII
          key={theme}
          colors={
            theme === 'light'
              ? ['#94a3b8', '#3b82f6', '#1d4ed8']
              : ['#070d1e', '#0f2042', '#1e40af', '#38bdf8']
          }
          shape="horizon"
          characters=" 01SUARMA</>#@"
          cellSize={16}
          density={0.78}
          glyphOpacity={theme === 'light' ? 0.75 : 0.85}
          gradientOpacity={theme === 'light' ? 0.08 : 0}
          glow={theme === 'light' ? 0.08 : 0.15}
          flow={0.35}
          speed={0.6}
          mouseInteraction={true}
          clickEffect="wave"
          lightMode={theme === 'light'}
          className="h-full w-full"
        />
      </div>

      <motion.div
        variants={staggerContainer(0.12)}
        initial="hidden"
        animate="visible"
        className="relative mx-auto grid w-full max-w-6xl items-center gap-14 px-6 lg:grid-cols-[1.15fr_.85fr]"
      >
        <div>
          <motion.p variants={fadeUp} className="mt-7 font-display text-lg font-medium text-slate-200 sm:text-xl">
            {p.greeting}
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="mt-2 font-display text-4xl font-bold leading-tight text-white sm:text-5xl xl:text-6xl"
          >
            {meta.fullName.split(',')[0]}
            <span className="text-brand">.</span>
          </motion.h1>

          <motion.div variants={fadeUp} className="mt-5 flex items-center text-lg font-medium text-slate-200 sm:text-xl">
            <span className="mr-2">{t.hero.imA}</span>
            <span className="font-bold text-brand"><Typewriter words={p.roles} /></span>
            <span className="animate-pulse text-brand">|</span>
          </motion.div>

          <motion.blockquote
            variants={fadeUp}
            className="mt-6 max-w-xl border-l-4 border-brand pl-4 text-sm italic leading-relaxed text-slate-400"
          >
            "{p.tagline}"
          </motion.blockquote>

          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="btn-primary-glass px-7 py-3 text-sm"
            >
              {t.hero.viewWork}
            </a>
            <a
              href="#contact"
              className="btn-ghost px-7 py-3 text-sm font-bold uppercase tracking-wide"
            >
              {t.hero.hireMe}
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-8 flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                title={s.label}
                className="btn-ghost flex h-11 w-11 items-center justify-center text-slate-300 hover:-translate-y-1 hover:text-brand"
              >
                {s.icon}
              </a>
            ))}
          </motion.div>

          <motion.dl
            variants={staggerContainer(0.15, 0.5)}
            className="card mt-10 grid max-w-lg grid-cols-3 gap-6 p-5"
          >
            {t.hero.stats.map((s) => (
              <motion.div key={s.label} variants={fadeUp}>
                <dt className="text-xs text-slate-400 mb-1">{s.label}</dt>
                <StatCounter value={s.value} />
              </motion.div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          variants={scaleIn}
          className="relative mx-auto hidden w-full max-w-sm lg:flex lg:justify-center xl:max-w-md"
        >
          <ProfileCard
            avatarUrl="/images/projects/profile.png"
            miniAvatarUrl="/images/projects/profile.png"
            name={meta.fullName.split(',')[0]}
            title={p.roles[0] || 'Full-Stack Engineer'}
            handle="suarma.dev"
            status={p.availability}
            statusColor="#22c55e"
            contactText={t.hero.hireMe}
            onContactClick={() => {
              const el = document.getElementById('contact');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            theme={theme === 'light' ? 'light' : 'dark'}
            holo={0.65}
            glare={0.4}
            tiltStrength={14}
            parallax={8}
            radius={16}
            enableTilt={true}
            intro={true}
            showUserInfo={true}
            className="z-10"
          />
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-500 transition hover:text-brand md:flex"
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.25em]">{t.hero.scroll}</span>
        <span className="flex h-9 w-[22px] justify-center rounded-full border border-line pt-1.5">
          <span className="scroll-cue-dot h-2 w-1 rounded-full bg-brand" />
        </span>
      </motion.a>
    </section>
  );
}
