import { experiences } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

// Pengalaman magang, urut dari yang terbaru, sesuai CV.
export default function ExperienceSection() {
  return (
    <section id="pengalaman" className="scroll-mt-24 border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-20">
        <Reveal>
          <SectionHeading
            number="04-A"
            label="Pengalaman"
            title="Pengalaman"
          />

          <div className="space-y-10">
            {experiences.map((job) => (
              <article key={job.place} className="grid gap-4 md:grid-cols-[1fr_2fr]">
                <div>
                  <h3 className="text-xl font-medium text-white">{job.place}</h3>
                  <p className="mt-1 text-muted">{job.role}</p>
                  <p className="mt-2 font-mono text-xs font-semibold tracking-[0.14em] text-muted uppercase">
                    {job.period}
                  </p>
                </div>
                <ul className="space-y-3">
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
