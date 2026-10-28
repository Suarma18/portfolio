import { useState } from 'react';
import { useLang } from '../lib/i18n';
import { meta } from '../data/content';
import { WhatsAppIcon, LinkedInIcon } from './socialIcons';
import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';

export default function Contact() {
  const { t } = useLang();
  const c = t.contact;
  const [copied, setCopied] = useState(false);
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    if (!value.trim()) return c.form.errRequired;
    if (name === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return c.form.errEmail;
    return '';
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (!['name', 'email', 'message'].includes(name)) return;
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) || undefined }));
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(meta.email);
    } catch {
      const el = document.createElement('textarea');
      el.value = meta.email;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const nextErrors = {};
    let firstInvalid = null;
    for (const name of ['name', 'email', 'message']) {
      const msg = validateField(name, (data.get(name) || '').toString());
      if (msg) {
        nextErrors[name] = msg;
        if (!firstInvalid) firstInvalid = name;
      }
    }
    setErrors(nextErrors);
    if (firstInvalid) {
      e.currentTarget.querySelector(`[name="${firstInvalid}"]`)?.focus();
      return;
    }
    const subject = encodeURIComponent(`${c.form.subjectPrefix}: ${data.get('name')}`);
    const body = encodeURIComponent(
      `${c.form.name}: ${data.get('name')}\n${c.form.email}: ${data.get('email')}\n${c.form.type}: ${data.get('type')}\n\n${data.get('message')}`
    );
    setSent(true);
    window.location.href = `mailto:${meta.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section-padding section-stream relative overflow-hidden">
      <div className="pointer-events-none absolute top-1/3 -right-32 h-96 w-96 rounded-full bg-brand/10 blur-[110px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          title={c.title}
          highlight={c.highlight}
          subtitle={c.subtitle}
        />

        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal className="space-y-4">
            <div className="contact-item card p-6">
              <p className="text-xs uppercase tracking-wider text-slate-500">{c.emailLabel}</p>
              <p className="mt-1.5 break-all font-display text-lg font-semibold text-white">
                {meta.email}
              </p>
              <button
                onClick={copyEmail}
                className={`mt-4 inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition duration-200 hover:-translate-y-0.5 ${
                  copied
                    ? 'border border-emerald-400/50 bg-emerald-400 text-ink shadow-[0_8px_20px_-6px_rgba(52,211,153,0.5)]'
                    : 'btn-primary-glass'
                }`}
              >
                {copied ? (
                  <>
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {c.copied}
                  </>
                ) : (
                  <>
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
                    </svg>
                    {c.copyEmail}
                  </>
                )}
              </button>
            </div>

            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-500">
                {c.quickChat}
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={meta.phoneWa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost inline-flex items-center gap-2.5 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white"
                >
                  <span className="text-brand"><WhatsAppIcon /></span>
                  WhatsApp
                </a>
                <a
                  href={meta.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost inline-flex items-center gap-2.5 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white"
                >
                  <span className="text-brand"><LinkedInIcon /></span>
                  LinkedIn
                </a>
                <a
                  href={`tel:${meta.phoneDisplay.replace(/\s/g, '')}`}
                  className="btn-ghost inline-flex items-center gap-2.5 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white"
                >
                  <span className="text-brand">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102A1.125 1.125 0 005.872 2.25H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </span>
                  {meta.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="card flex items-center gap-4 p-5">
              <span className="contact-icon">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </span>
              <span>
                <span className="block text-xs text-slate-500">{c.basedInLabel}</span>
                <span className="block font-medium text-white">{t.profile.location}</span>
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="card p-7"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="form-field">
                  <span>{c.form.name}</span>
                  <input
                    required
                    name="name"
                    type="text"
                    placeholder={c.form.namePh}
                    onBlur={handleBlur}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" role="alert" className="field-error">{errors.name}</p>
                  )}
                </label>
                <label className="form-field">
                  <span>{c.form.email}</span>
                  <input
                    required
                    name="email"
                    type="email"
                    placeholder={c.form.emailPh}
                    onBlur={handleBlur}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" role="alert" className="field-error">{errors.email}</p>
                  )}
                </label>
              </div>

              <label className="form-field mt-5 block">
                <span>{c.form.type}</span>
                <div className="relative">
                  <select
                    name="type"
                    defaultValue="web"
                    className="w-full appearance-none rounded-xl px-4 py-3 pr-10 text-sm text-white placeholder-slate-500 outline-none transition"
                  >
                    {c.form.typeOptions.map((opt) => (
                      <option key={opt.value} value={opt.value} className="bg-panel text-white">
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-slate-400">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </div>
                </div>
              </label>

              <label className="form-field mt-5 block">
                <span>{c.form.message}</span>
                <textarea
                  required
                  name="message"
                  rows={5}
                  placeholder={c.form.messagePh}
                  onBlur={handleBlur}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  className="resize-none"
                />
                {errors.message && (
                  <p id="message-error" role="alert" className="field-error">{errors.message}</p>
                )}
              </label>

              <button
                type="submit"
                className="btn-primary-glass mt-6 w-full py-3.5 text-xs tracking-widest"
              >
                {c.form.send}
              </button>

              {sent && (
                <div className="mt-4 space-y-2 rounded-xl border border-emerald-400/40 bg-emerald-400/10 p-4 text-center text-xs text-emerald-300 backdrop-blur-md">
                  <p role="status" className="font-semibold">{c.form.sentNote}</p>
                  <p className="text-[11px] text-slate-400">
                    {c.form.fallbackPre}{' '}
                    <a href={meta.phoneWa} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand underline hover:text-white">
                      WhatsApp
                    </a>{' '}
                    {c.form.fallbackOr} <span className="font-semibold text-white">{meta.email}</span>.
                  </p>
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
