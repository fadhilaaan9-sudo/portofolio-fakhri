import { education, skillGroups } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

// Pendidikan dan keahlian teknis, sesuai daftar di CV.
export default function EducationSkillsSection() {
  return (
    <section id="pendidikan" className="scroll-mt-24 border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-20">
        <Reveal>
          <SectionHeading
            number="05-A"
            label="Pendidikan & Keahlian"
            title="Pendidikan & Keahlian"
          />

          <div className="grid gap-10 lg:grid-cols-2">
            <article className="rounded-lg border border-border bg-panel p-6">
              <p className="font-mono text-xs font-semibold tracking-[0.2em] text-muted uppercase">
                Pendidikan
              </p>
              <h3 className="mt-4 text-2xl font-medium text-white">
                {education.degree}
              </h3>
              <p className="mt-2 leading-relaxed text-muted">{education.school}</p>
              <p className="mt-4 font-mono text-xs font-semibold tracking-[0.14em] text-muted uppercase">
                {education.period}
              </p>
            </article>

            <div className="space-y-8">
              {skillGroups.map((group) => (
                <div key={group.title}>
                  <h3 className="font-mono text-xs font-semibold tracking-[0.2em] text-muted uppercase">
                    {group.title}
                  </h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full bg-surface px-3 py-1.5 text-sm font-medium text-black"
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
