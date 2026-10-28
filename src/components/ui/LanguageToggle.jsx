import { useId } from 'react';
import { motion } from 'framer-motion';
import { useLang } from '../../lib/i18n';

const OPTIONS = [
  { id: 'en', label: 'EN' },
  { id: 'id', label: 'ID' },
];

export default function LanguageToggle({ className = '' }) {
  const { lang, setLang } = useLang();
  const uid = useId();

  return (
    <div
      role="group"
      aria-label="Language / Bahasa"
      className={`glass-surface relative flex h-10 shrink-0 items-center rounded-xl p-1 ${className}`}
    >
      {OPTIONS.map((opt) => (
        <button
          key={opt.id}
          onClick={() => setLang(opt.id)}
          aria-pressed={lang === opt.id}
          className={`relative z-10 h-8 w-10 rounded-lg text-xs font-bold tracking-wide transition-colors ${
            lang === opt.id ? 'text-ink' : 'text-slate-400 hover:text-brand'
          }`}
        >
          {lang === opt.id && (
            <motion.span
              layoutId={`lang-pill-${uid}`}
              transition={{ type: 'spring', bounce: 0.25, duration: 0.45 }}
              className="absolute inset-0 -z-10 rounded-lg bg-brand shadow-[0_4px_12px_-2px_rgba(59,130,246,0.5)]"
            />
          )}
          {opt.label}
        </button>
      ))}
    </div>
  );
}
