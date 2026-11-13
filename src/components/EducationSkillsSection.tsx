import { education, publication, skillGroups, softSkills } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

// Pendidikan (termasuk IPK dan kartu publikasi) dan keahlian, sesuai daftar di CV.
export default function EducationSkillsSection() {
  return (
    <section id="pendidikan" className="scroll-mt-28 border-t border-border md:scroll-mt-24">
      <div className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 sm:py-16 md:py-20">
        <Reveal>
          <SectionHeading
            number="02"
            label="Pendidikan & Keahlian"
            title="Pendidikan & Keahlian"
          />

          <div className="grid gap-8 sm:gap-10 lg:grid-cols-2">
            <div className="min-w-0 space-y-6 sm:space-y-8">
              <article className="min-w-0 rounded-[24px] border border-border bg-panel p-5 sm:p-6">
                <p className="font-mono text-xs font-semibold tracking-[0.16em] text-amber-soft uppercase sm:tracking-[0.2em]">
                  Pendidikan
                </p>
                <h3 className="mt-4 text-[clamp(1.375rem,5vw,1.5rem)] font-extrabold break-words text-white">
                  {education.degree}
                </h3>
                <p className="mt-2 leading-relaxed break-words text-muted">{education.school}</p>
                <p className="mt-1 text-sm text-muted">{education.location}</p>
                <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-border pt-4">
                  <p className="font-mono text-xs font-semibold tracking-[0.14em] break-words text-muted uppercase">
                    {education.period}
                  </p>
                  <p className="font-mono text-xs font-semibold tracking-[0.14em] break-words text-mint uppercase">
                    IPK {education.gpa}
                  </p>
                </div>
              </article>

              <article className="min-w-0 rounded-[24px] border border-border bg-panel p-5 sm:p-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="font-mono text-xs font-semibold tracking-[0.16em] text-amber-soft uppercase sm:tracking-[0.2em]">
                    {publication.kind}
                  </p>
                  <span className="rounded-full border border-amber/50 bg-amber/10 px-3 py-1 font-mono text-xs font-semibold tracking-wide text-amber-soft">
                    {publication.accreditation}
                  </span>
                </div>
                <h3 className="mt-4 text-lg leading-snug font-extrabold break-words text-white">
                  &ldquo;{publication.title}&rdquo;
                </h3>
                <p className="mt-3 leading-relaxed break-words text-muted">
                  {publication.journal}
                </p>
                <p className="mt-1 font-mono text-xs font-semibold tracking-[0.14em] break-words text-muted uppercase">
                  {publication.detail}
                </p>
              </article>
            </div>

            <div id="keahlian" className="min-w-0 scroll-mt-28 space-y-8 md:scroll-mt-24">
              {skillGroups.map((group) => (
                <div key={group.title} className="min-w-0">
                  <h3 className="font-mono text-xs font-semibold tracking-[0.16em] break-words text-amber-soft uppercase sm:tracking-[0.2em]">
                    {group.title}
                  </h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full bg-mint px-3 py-2 text-sm font-bold break-words text-background"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div className="min-w-0 border-t border-border pt-8">
                <h3 className="font-mono text-xs font-semibold tracking-[0.16em] break-words text-amber-soft uppercase sm:tracking-[0.2em]">
                  Soft Skills
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {softSkills.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-border bg-background-soft px-3 py-2 text-sm font-semibold break-words text-white"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
