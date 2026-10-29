import { experiences } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

// Pengalaman magang, urut dari yang terbaru, sesuai CV.
export default function ExperienceSection() {
  return (
    <section id="pengalaman" className="scroll-mt-28 border-t border-border md:scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 md:py-20">
        <Reveal>
          <SectionHeading
            number="04-A"
            label="Pengalaman"
            title="Pengalaman"
          />

          <div className="space-y-10">
            {experiences.map((job) => (
              <article key={job.place} className="grid min-w-0 gap-3 sm:gap-4 md:grid-cols-[1fr_2fr]">
                <div className="min-w-0">
                  <h3 className="text-lg font-medium break-words text-white sm:text-xl">{job.place}</h3>
                  <p className="mt-1 text-muted">{job.role}</p>
                  <p className="mt-2 font-mono text-xs font-semibold tracking-[0.14em] break-words text-muted uppercase">
                    {job.period}
                  </p>
                </div>
                <ul className="min-w-0 space-y-3">
                  {job.points.map((point) => (
                    <li
                      key={point}
                      className="border-l-2 border-border pl-4 leading-relaxed text-muted"
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
