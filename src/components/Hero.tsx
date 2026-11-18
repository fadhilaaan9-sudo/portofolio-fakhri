import { contact } from '../data/portfolio'
import Reveal from './Reveal'

// Hero satu kolom (tanpa kartu visualisasi K-Means).
// Ikon Instagram: logo kamera Instagram, warna mint.
function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 shrink-0 text-mint"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

export default function Hero() {
  return (
    <section id="atas" className="mx-auto max-w-[1240px] px-4 pt-10 pb-14 sm:px-6 sm:pt-14 md:pt-20 md:pb-24">
      <Reveal>
        <div className="max-w-[860px]">
          <h1 className="text-[clamp(2.75rem,8vw,6.375rem)] leading-[1.02] font-extrabold tracking-tight text-ink">
            Fakhri,
            <br />
            <span className="font-serif font-semibold italic text-mint">
              Data Analyst
            </span>
          </h1>

          <p className="mt-6 font-mono text-xs font-semibold tracking-[0.2em] text-amber-soft uppercase sm:text-sm">
            Pengolahan Data • Visualisasi • Riset Terpublikasi
          </p>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            Lulusan S1 Teknik Informatika yang mengolah data menjadi laporan
            dan visualisasi yang mudah dipahami.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#proyek"
              className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-mint px-6 text-sm font-bold text-white transition-opacity hover:opacity-85 sm:w-auto"
            >
              Lihat Proyek ↓
            </a>
            <a
              href={contact.cvUrl}
              download="CV-Fakhri.pdf"
              className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-border px-6 text-sm font-bold text-ink transition-colors hover:border-mint hover:text-mint sm:w-auto"
            >
              Unduh CV
            </a>
          </div>

          <p className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted">
            <a href={`mailto:${contact.email}`} className="break-all transition-colors hover:text-mint">
              {contact.email}
            </a>
            <a
              href={contact.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-mint"
            >
              <InstagramIcon />
              {contact.instagramLabel}
            </a>
            <span>Pekanbaru, Riau</span>
          </p>
        </div>
      </Reveal>
    </section>
  )
}
