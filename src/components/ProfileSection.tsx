import { focusAreas, profileSummary } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

// Tentang sesuai preview: judul "Tentang Saya" dengan dua kartu,
// Ringkasan Profil (teks CV verbatim) dan Fokus Kerja.
// (Tiga kartu lama IPK / Publikasi / Lokasi sudah dihapus dari section
// ini; IPK 3.46 dan SINTA 4 tetap tampil di Pendidikan & Publikasi.)
export default function ProfileSection() {
  return (
    <section id="profil" className="scroll-mt-28 border-t border-border md:scroll-mt-24">
      <div className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 sm:py-16 md:py-20">
        <Reveal>
          <SectionHeading title="Tentang" accent="Saya" />
          <div className="grid gap-4 lg:grid-cols-[1.3fr_0.7fr]">
            <div className="min-w-0 rounded-[24px] border border-border bg-panel p-5 sm:p-6">
              <p className="font-mono text-xs font-semibold tracking-[0.16em] text-amber-soft uppercase">
                Ringkasan Profil
              </p>
              <p className="mt-4 text-base leading-[1.6] text-ink md:text-lg">
                {profileSummary}
              </p>
            </div>
            <div className="min-w-0 rounded-[24px] border border-border bg-panel p-5 sm:p-6">
              <p className="font-mono text-xs font-semibold tracking-[0.16em] text-amber-soft uppercase">
                Fokus Kerja
              </p>
              <ol className="mt-4 space-y-4">
                {focusAreas.map((item, index) => (
                  <li key={item.title} className="flex gap-3">
                    <span className="font-mono text-sm font-bold text-mint">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="min-w-0">
                      <span className="block font-bold text-ink">{item.title}</span>
                      <span className="mt-0.5 block text-sm leading-relaxed text-muted">
                        {item.description}
                      </span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
