import { contact } from '../data/portfolio'
import Reveal from './Reveal'

// Kontak: hanya email, telepon, dan GitHub yang tertulis di CV.
export default function ContactSection() {
  return (
    <section id="kontak" className="scroll-mt-28 border-t border-border md:scroll-mt-24">
      <div className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 sm:py-16 md:py-20">
        <Reveal>
          <p className="font-mono text-xs font-semibold tracking-[0.2em] text-amber-soft uppercase">
            07 // Kontak
          </p>
          <h2 className="mt-4 text-[clamp(2rem,9vw,3.5rem)] leading-[1.04] font-extrabold tracking-tight text-white">
            Hubungi{' '}
            <span className="font-serif font-semibold italic text-mint">
              Fakhri.
            </span>
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted">
            Terbuka untuk peluang Data Analyst — silakan hubungi melalui
            email, telepon, atau GitHub.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-mint px-6 text-sm font-bold text-background transition-opacity hover:opacity-85"
            >
              Hubungi Saya
            </a>
            <a
              href={contact.cvUrl}
              className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-border px-6 text-sm font-bold text-white transition-colors hover:border-mint hover:text-mint"
            >
              Unduh CV
            </a>
          </div>

          <div className="mt-8 grid gap-4 sm:mt-10 md:grid-cols-3">
            <a
              href={`mailto:${contact.email}`}
              className="block min-w-0 rounded-[24px] border border-border bg-panel p-5 transition-colors hover:border-mint/50 sm:p-6"
            >
              <p className="font-mono text-xs font-semibold tracking-[0.16em] text-amber-soft uppercase">
                Email
              </p>
              <p className="mt-3 break-all font-bold text-white">{contact.email}</p>
            </a>
            <a
              href={contact.phoneHref}
              className="block min-w-0 rounded-[24px] border border-border bg-panel p-5 transition-colors hover:border-mint/50 sm:p-6"
            >
              <p className="font-mono text-xs font-semibold tracking-[0.16em] text-amber-soft uppercase">
                Telepon
              </p>
              <p className="mt-3 font-bold break-words text-white">{contact.phoneDisplay}</p>
            </a>
            <a
              href={contact.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="block min-w-0 rounded-[24px] border border-border bg-panel p-5 transition-colors hover:border-mint/50 sm:p-6"
            >
              <p className="font-mono text-xs font-semibold tracking-[0.16em] text-amber-soft uppercase">
                GitHub
              </p>
              <p className="mt-3 font-bold break-all text-white">{contact.githubLabel}</p>
            </a>
          </div>
        </Reveal>
      </div>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-1 px-4 py-6 text-sm text-muted sm:px-6 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Fakhri — Data Analyst</p>
          <p className="font-mono text-xs tracking-[0.14em] break-words uppercase">
            React + Vite + Tailwind CSS
          </p>
        </div>
      </footer>
    </section>
  )
}
