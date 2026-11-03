import { useLang } from '../lib/i18n';
import { meta } from '../data/content';
import { WhatsAppIcon, MailIcon, LinkedInIcon, GitHubIcon } from './socialIcons';

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="glass-heavy relative z-10 border-t py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <a href="#home" className="font-display text-xl font-extrabold uppercase tracking-tight text-white transition hover:text-brand">
          suarma<span className="text-brand">.</span>dev
        </a>

        <ul className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-sm">
          {t.navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-xs font-bold uppercase tracking-wider text-slate-400 transition hover:text-brand">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a href={meta.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="glass-pill flex h-10 w-10 items-center justify-center rounded-xl text-slate-400 transition duration-200 hover:-translate-y-0.5 hover:border-brand/50 hover:text-brand">
            <GitHubIcon />
          </a>
          <a href={meta.phoneWa} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="glass-pill flex h-10 w-10 items-center justify-center rounded-xl text-slate-400 transition duration-200 hover:-translate-y-0.5 hover:border-brand/50 hover:text-brand">
            <WhatsAppIcon />
          </a>
          <a href={`mailto:${meta.email}`} aria-label="Email" className="glass-pill flex h-10 w-10 items-center justify-center rounded-xl text-slate-400 transition duration-200 hover:-translate-y-0.5 hover:border-brand/50 hover:text-brand">
            <MailIcon />
          </a>
          <a href={meta.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="glass-pill flex h-10 w-10 items-center justify-center rounded-xl text-slate-400 transition duration-200 hover:-translate-y-0.5 hover:border-brand/50 hover:text-brand">
            <LinkedInIcon />
          </a>
        </div>
      </div>

      <p className="mt-8 text-center text-xs text-slate-400">
        &copy; {new Date().getFullYear()} {meta.fullName}. {t.footer.credit}
      </p>
      <p className="mt-2 text-center text-[11px] text-slate-400/80">{t.footer.builtWith}</p>
    </footer>
  );
}
