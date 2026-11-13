import { trainings } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

// Pelatihan 2026 dari CV — section baru.
export default function TrainingSection() {
  return (
    <section id="pelatihan" className="scroll-mt-28 border-t border-border md:scroll-mt-24">
      <div className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 sm:py-16 md:py-20">
        <Reveal>
          <SectionHeading title="Pelatihan" />

          <p className="max-w-3xl text-base leading-[1.6] text-muted md:text-lg">
            Pelatihan nasional yang diikuti pada 2026.
          </p>

          <ul className="mt-8 grid gap-4 sm:mt-10 sm:gap-5 md:grid-cols-2">
            {trainings.map((training) => (
              <li
                key={training.title}
                className="min-w-0 rounded-[24px] border border-border bg-panel p-5 transition-colors hover:border-mint/50 sm:p-6"
              >
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <h3 className="min-w-0 flex-1 text-lg font-extrabold break-words text-white">
                    {training.title}
                  </h3>
                  <span className="shrink-0 rounded-full bg-mint px-3 py-1 font-mono text-xs font-bold tracking-wide text-background">
                    {training.year}
                  </span>
                </div>
                <p className="mt-3 font-mono text-xs font-semibold tracking-[0.14em] break-words text-amber-soft uppercase">
                  {[training.provider, training.scope].filter(Boolean).join(' · ')}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
