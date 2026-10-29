import { contact } from '../data/portfolio'
import Reveal from './Reveal'

// Kontak: hanya email, telepon, dan GitHub yang tertulis di CV.
export default function ContactSection() {
  return (
    <section id="kontak" className="scroll-mt-24 border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-20">
        <Reveal>
          <p className="font-mono text-xs font-semibold tracking-[0.2em] text-muted uppercase">
            06-A // Kontak
          </p>
          <h2 className="mt-4 text-[clamp(2.25rem,6vw,3.5rem)] leading-[1.04] font-medium tracking-tight text-white">
            Hubungi Fakhri.
          </h2>

          <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-3">
            <a
              href={`mailto:${contact.email}`}
              className="block bg-background p-6 transition-colors hover:bg-panel"
            >
              <p className="font-mono text-xs font-semibold tracking-[0.2em] text-muted uppercase">
                Email
              </p>
              <p className="mt-3 break-all font-medium text-white">{contact.email}</p>
            </a>
            <a
              href={contact.phoneHref}
              className="block bg-background p-6 transition-colors hover:bg-panel"
            >
              <p className="font-mono text-xs font-semibold tracking-[0.2em] text-muted uppercase">
                Telepon
              </p>
              <p className="mt-3 font-medium text-white">{contact.phoneDisplay}</p>
            </a>
            <a
              href={contact.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="block bg-background p-6 transition-colors hover:bg-panel"
            >
              <p className="font-mono text-xs font-semibold tracking-[0.2em] text-muted uppercase">
                GitHub
              </p>
              <p className="mt-3 font-medium text-white">{contact.githubLabel}</p>
            </a>
          </div>
        </Reveal>
      </div>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-sm text-muted md:flex-row md:items-center md:justify-between md:px-6">
          <p>© 2026 Fakhri — Data Analyst</p>
          <p className="font-mono text-xs tracking-[0.14em] uppercase">
            React + Vite + Tailwind CSS
          </p>
        </div>
      </footer>
    </section>
  )
}
