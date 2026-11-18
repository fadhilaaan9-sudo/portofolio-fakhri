import { trainings } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

// Pelatihan — 7 entri, masing-masing dengan tautan sertifikat (Google Drive).
export default function TrainingSection() {
  return (
    <section id="pelatihan" className="scroll-mt-28 border-t border-border md:scroll-mt-24">
      <div className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 sm:py-16 md:py-20">
        <Reveal>
          <SectionHeading title="Pelatihan" accent="2026" />

          <ul className="mt-8 grid gap-4 sm:mt-10 sm:gap-5 md:grid-cols-2">
            {trainings.map((training) => (
              <li
                key={training.title}
                className="flex min-w-0 flex-col rounded-[24px] border border-border bg-panel p-5 transition-colors hover:border-mint/50 sm:p-6"
              >
                <h3 className="min-w-0 text-lg font-extrabold break-words text-ink">
                  {training.title}
                </h3>
                {training.description ? (
                  <p className="mt-3 font-mono text-xs font-semibold tracking-[0.14em] break-words text-amber-soft uppercase">
                    {training.description}
                  </p>
                ) : null}
                <a
                  href={training.certificateUrl}
                  target="_blank"
                  rel="noopener"
                  aria-label={`Lihat sertifikat ${training.title} (PDF di Google Drive)`}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-mint transition-colors hover:underline"
                >
                  Lihat Sertifikat ↗
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
