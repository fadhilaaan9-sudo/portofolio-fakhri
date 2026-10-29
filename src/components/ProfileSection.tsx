import { profileSummary } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

// Ringkasan profil: teks diambil dari CV, tidak ditambah-tambah.
export default function ProfileSection() {
  return (
    <section id="profil" className="scroll-mt-28 border-t border-border md:scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 md:py-20">
        <Reveal>
          <SectionHeading
            number="02-A"
            label="Ringkasan Profil"
            title="Profil"
          />
          <p className="max-w-3xl text-base leading-[1.6] text-white md:text-lg">
            {profileSummary}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
