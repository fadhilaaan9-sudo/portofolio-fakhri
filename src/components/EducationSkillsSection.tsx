import { education, skillGroups } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

// Pendidikan dan keahlian teknis, sesuai daftar di CV.
export default function EducationSkillsSection() {
  return (
    <section id="pendidikan" className="scroll-mt-28 border-t border-border md:scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 md:py-20">
        <Reveal>
          <SectionHeading
            number="05-A"
            label="Pendidikan & Keahlian"
            title="Pendidikan & Keahlian"
          />

          <div className="grid gap-8 sm:gap-10 lg:grid-cols-2">
            <article className="min-w-0 rounded-lg border border-border bg-panel p-5 sm:p-6">
              <p className="font-mono text-xs font-semibold tracking-[0.16em] text-muted uppercase sm:tracking-[0.2em]">
                Pendidikan
              </p>
              <h3 className="mt-4 text-[clamp(1.375rem,5vw,1.5rem)] font-medium break-words text-white">
                {education.degree}
              </h3>
              <p className="mt-2 leading-relaxed break-words text-muted">{education.school}</p>
              <p className="mt-4 font-mono text-xs font-semibold tracking-[0.14em] break-words text-muted uppercase">
                {education.period}
              </p>
            </article>

            <div className="min-w-0 space-y-8">
              {skillGroups.map((group) => (
                <div key={group.title} className="min-w-0">
                  <h3 className="font-mono text-xs font-semibold tracking-[0.16em] break-words text-muted uppercase sm:tracking-[0.2em]">
                    {group.title}
                  </h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full bg-surface px-3 py-2 text-sm font-medium break-words text-black"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
