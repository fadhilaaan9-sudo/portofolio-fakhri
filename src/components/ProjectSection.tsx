import { brandisProject, dashboardProject } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

// Dua kartu (Nov 2026): Brandis (featured) dan Dashboard Harga Bahan Pokok.
// Kartu riset K-Means dihapus dari section ini; detail publikasi
// lengkap tetap tampil di section Pendidikan & Publikasi.
export default function ProjectSection() {
  return (
    <section id="proyek" className="scroll-mt-28 border-t border-border md:scroll-mt-24">
      <div className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 sm:py-16 md:py-20">
        <Reveal>
          <SectionHeading title="Proyek" />

          <div className="space-y-6">
            {/* Brandis */}
            <article className="min-w-0 rounded-[24px] border border-border bg-panel p-5 sm:p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-[clamp(1.25rem,5vw,1.5rem)] font-extrabold break-words text-white">
                  {brandisProject.name}
                </h3>
                <p className="shrink-0 font-mono text-xs font-semibold tracking-[0.14em] text-amber-soft uppercase">
                  {brandisProject.year}
                </p>
              </div>
              <p className="mt-3 inline-flex rounded-full border border-mint/40 bg-mint/10 px-3 py-1 font-mono text-xs font-semibold tracking-wide text-mint">
                {brandisProject.label}
              </p>
              <p className="mt-4 max-w-3xl text-base leading-[1.6] text-muted">
                {brandisProject.description}
              </p>
              <ul className="mt-6 space-y-3">
                {brandisProject.points.map((point) => (
                  <li
                    key={point}
                    className="border-l-2 border-mint pl-4 leading-relaxed text-muted"
                  >
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                {brandisProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-background-soft px-3 py-1.5 font-mono text-xs font-semibold tracking-wide text-white"
                  >
                    {tag.toUpperCase()}
                  </span>
                ))}
              </div>
            </article>
            {/* Dashboard Harga Bahan Pokok */}
            <article className="min-w-0 rounded-[24px] border border-border bg-panel p-5 sm:p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-[clamp(1.25rem,5vw,1.5rem)] font-extrabold break-words text-white">
                  {dashboardProject.name}
                </h3>
                <p className="shrink-0 font-mono text-xs font-semibold tracking-[0.14em] text-amber-soft uppercase">
                  {dashboardProject.year}
                </p>
              </div>
              <p className="mt-3 inline-flex rounded-full border border-mint/40 bg-mint/10 px-3 py-1 font-mono text-xs font-semibold tracking-wide text-mint">
                {dashboardProject.label}
              </p>
              <p className="mt-4 max-w-3xl text-base leading-[1.6] text-muted">
                {dashboardProject.description}
              </p>
              <ul className="mt-6 space-y-3">
                {dashboardProject.points.map((point) => (
                  <li
                    key={point}
                    className="border-l-2 border-mint pl-4 leading-relaxed text-muted"
                  >
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                {dashboardProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-background-soft px-3 py-1.5 font-mono text-xs font-semibold tracking-wide text-white"
                  >
                    {tag.toUpperCase()}
                  </span>
                ))}
              </div>
              <a
                href={dashboardProject.link}
                target="_blank"
                rel="noopener"
                aria-label={`Buka dashboard ${dashboardProject.name}`}
                className="mt-6 inline-flex items-center gap-1 text-sm font-bold text-mint transition-colors hover:underline"
              >
                Buka Dashboard ↗
              </a>
            </article>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
