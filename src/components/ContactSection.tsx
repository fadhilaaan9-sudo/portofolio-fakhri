import { contact } from '../data/portfolio'
import Reveal from './Reveal'

// Kontak: hanya email, telepon, dan GitHub yang tertulis di CV.
export default function ContactSection() {
  return (
    <section id="kontak" className="scroll-mt-28 border-t border-border md:scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 md:py-20">
        <Reveal>
          <p className="font-mono text-xs font-semibold tracking-[0.16em] text-muted uppercase sm:tracking-[0.2em]">
            06-A // Kontak
          </p>
          <h2 className="mt-4 text-[clamp(2rem,9vw,3.5rem)] leading-[1.04] font-medium tracking-tight text-white">
            Hubungi Fakhri.
          </h2>

          <div className="mt-8 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:mt-10 md:grid-cols-3">
            <a
              href={`mailto:${contact.email}`}
              className="block min-w-0 bg-background p-5 transition-colors hover:bg-panel sm:p-6"
            >
              <p className="font-mono text-xs font-semibold tracking-[0.16em] text-muted uppercase sm:tracking-[0.2em]">
                Email
              </p>
              <p className="mt-3 break-all font-medium text-white">{contact.email}</p>
            </a>
            <a
              href={contact.phoneHref}
              className="block min-w-0 bg-background p-5 transition-colors hover:bg-panel sm:p-6"
            >
              <p className="font-mono text-xs font-semibold tracking-[0.16em] text-muted uppercase sm:tracking-[0.2em]">
                Telepon
              </p>
              <p className="mt-3 font-medium break-words text-white">{contact.phoneDisplay}</p>
            </a>
            <a
              href={contact.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="block min-w-0 bg-background p-5 transition-colors hover:bg-panel sm:p-6"
            >
              <p className="font-mono text-xs font-semibold tracking-[0.16em] text-muted uppercase sm:tracking-[0.2em]">
                GitHub
              </p>
              <p className="mt-3 font-medium break-all text-white">{contact.githubLabel}</p>
            </a>
          </div>
        </Reveal>
      </div>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-6 text-sm text-muted sm:px-6 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Fakhri — Data Analyst</p>
          <p className="font-mono text-xs tracking-[0.14em] break-words uppercase">
            React + Vite + Tailwind CSS
          </p>
        </div>
      </footer>
    </section>
  )
}
