import { education, publication } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

// Pendidikan dan publikasi lengkap (IPK, jurnal, volume, SINTA 4),
// sesuai preview. Keahlian kini di komponen SkillsSection terpisah.
export default function EducationSection() {
  return (
    <section id="pendidikan" className="scroll-mt-28 border-t border-border md:scroll-mt-24">
      <div className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 sm:py-16 md:py-20">
        <Reveal>
          <SectionHeading title="Pendidikan & Publikasi" />

          <div className="grid gap-4 sm:gap-5 lg:grid-cols-2">
            <article className="min-w-0 rounded-[24px] border border-border bg-panel p-5 sm:p-6">
              <p className="font-mono text-xs font-semibold tracking-[0.16em] text-amber-soft uppercase sm:tracking-[0.2em]">
                Pendidikan
              </p>
              <h3 className="mt-4 text-[clamp(1.375rem,5vw,1.5rem)] font-extrabold break-words text-ink">
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
              <h3 className="mt-4 text-lg leading-snug font-extrabold break-words text-ink">
                &ldquo;{publication.title}&rdquo;
              </h3>
              <p className="mt-3 leading-relaxed break-words text-muted">
                {publication.journal}
              </p>
              <p className="mt-1 font-mono text-xs font-semibold tracking-[0.14em] break-words text-muted uppercase">
                {publication.detail}
              </p>
              <a
                href={publication.doiUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-border bg-background-soft px-3 py-1.5 font-mono text-xs font-semibold tracking-wide text-mint transition-colors hover:border-mint"
              >
                DOI: {publication.doi} ↗
              </a>
            </article>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
