import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLang } from '../lib/i18n';
import { meta } from '../data/content';
import ThemeToggle from './ui/ThemeToggle';
import LanguageToggle from './ui/LanguageToggle';

export default function Navbar() {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        }),
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-heavy border-b' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-6 py-4">
        <a href="#home" className="font-display text-lg font-extrabold uppercase tracking-tight text-white">
          suarma<span className="text-brand">.</span>dev
        </a>

        <ul className="glass-surface hidden items-center gap-1 rounded-xl p-1 lg:flex">
          {t.navLinks.map((link) => (
            <li key={link.href} className="relative">
              <a
                href={link.href}
                className={`relative z-10 block rounded-lg px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors ${
                  active === link.href ? 'text-ink' : 'text-slate-300 hover:text-brand'
                }`}
              >
                {link.label}
              </a>
              {active === link.href && (
                <motion.span
                  layoutId="nav-active-pill"
                  transition={{ type: 'spring', bounce: 0.25, duration: 0.55 }}
                  className="absolute inset-0 rounded-lg bg-brand shadow-[0_4px_14px_-2px_rgba(59,130,246,0.5)]"
                />
              )}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <LanguageToggle className="hidden sm:flex" />
          <ThemeToggle className="hidden sm:flex" />
          <a
            href="#contact"
            className="btn-primary-glass hidden px-5 py-2 text-xs lg:inline-block"
          >
            {t.hero.hireMe}
          </a>

          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="glass-surface flex h-10 w-10 items-center justify-center rounded-xl text-white lg:hidden"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="glass-heavy overflow-hidden border-t lg:hidden"
          >
            <ul className="space-y-1 px-6 py-4">
              {t.navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-lg border-l-4 px-3 py-2.5 text-xs font-bold uppercase tracking-wider mobile-link ${
                      active === link.href ? 'border-brand bg-brand/10 text-brand' : 'border-transparent'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-2 pt-2 sm:hidden">
                <LanguageToggle />
                <ThemeToggle />
              </li>
              <li>
                <a
                  href={meta.phoneWa}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="btn-primary-glass mt-2 block px-5 py-2.5 text-center text-xs"
                >
                  {t.hero.hireWa}
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
