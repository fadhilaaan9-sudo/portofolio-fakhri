import { skillGroups } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

// Keahlian persis seperti di CV: dua kelompok, pill mint solid.
// Dipisah dari EducationSection agar urutan halaman sesuai preview
// (Keahlian tampil setelah Pelatihan).
export default function SkillsSection() {
  return (
    <section id="keahlian" className="scroll-mt-28 border-t border-border md:scroll-mt-24">
      <div className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 sm:py-16 md:py-20">
        <Reveal>
          <SectionHeading title="Keahlian" />

          <div className="space-y-8">
            {skillGroups.map((group) => (
              <div key={group.title} className="min-w-0">
                <h3 className="font-mono text-xs font-semibold tracking-[0.16em] break-words text-amber-soft uppercase sm:tracking-[0.2em]">
                  {group.title}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full bg-mint px-3 py-2 text-sm font-bold break-words text-white"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
