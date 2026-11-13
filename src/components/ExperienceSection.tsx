import { experiences } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

// Pengalaman magang, urut dari yang terbaru, sesuai preview.
// Judul, tanggal, dan label mengikuti preview; bullet persis CV.
export default function ExperienceSection() {
  return (
    <section id="pengalaman" className="scroll-mt-28 border-t border-border md:scroll-mt-24">
      <div className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 sm:py-16 md:py-20">
        <Reveal>
          <SectionHeading title="Pengalaman Magang" />

          <div className="space-y-6">
            {experiences.map((job) => (
              <article
                key={job.place}
                className="min-w-0 rounded-[24px] border border-border bg-panel p-5 sm:p-8"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-extrabold break-words text-white sm:text-xl">
                    {job.role} — {job.place}
                  </h3>
                  <p className="shrink-0 font-mono text-xs font-semibold tracking-[0.14em] text-amber-soft uppercase">
                    {job.period}
                  </p>
                </div>
                <p className="mt-3 inline-flex rounded-full border border-mint/40 bg-mint/10 px-3 py-1 font-mono text-xs font-semibold tracking-wide text-mint">
                  {job.label}
                </p>
                <ul className="mt-6 space-y-3">
                  {job.points.map((point) => (
                    <li
                      key={point}
                      className="border-l-2 border-mint pl-4 leading-relaxed text-muted"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
