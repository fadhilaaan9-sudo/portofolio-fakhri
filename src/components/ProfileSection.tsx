import { education, profileSummary, publication } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

// Ringkasan profil: teks diambil dari CV, tidak ditambah-tambah.
export default function ProfileSection() {
  return (
    <section id="profil" className="scroll-mt-28 border-t border-border md:scroll-mt-24">
      <div className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 sm:py-16 md:py-20">
        <Reveal>
          <SectionHeading title="Tentang" />
          <p className="max-w-3xl text-base leading-[1.6] text-white md:text-lg">
            {profileSummary}
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="min-w-0 rounded-[24px] border border-border bg-panel p-5 sm:p-6">
              <p className="font-mono text-xs font-semibold tracking-[0.16em] text-amber-soft uppercase">
                IPK
              </p>
              <p className="mt-3 text-2xl font-extrabold text-mint">{education.gpa}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                {education.degree}
              </p>
            </div>
            <div className="min-w-0 rounded-[24px] border border-border bg-panel p-5 sm:p-6">
              <p className="font-mono text-xs font-semibold tracking-[0.16em] text-amber-soft uppercase">
                Publikasi
              </p>
              <p className="mt-3 text-2xl font-extrabold text-mint">{publication.accreditation}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                {publication.journal}, {publication.detail}
              </p>
            </div>
            <div className="min-w-0 rounded-[24px] border border-border bg-panel p-5 sm:p-6">
              <p className="font-mono text-xs font-semibold tracking-[0.16em] text-amber-soft uppercase">
                Lokasi
              </p>
              <p className="mt-3 text-2xl font-extrabold text-mint">Pekanbaru</p>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                Riau — {education.school}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
