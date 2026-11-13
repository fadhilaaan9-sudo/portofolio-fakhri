import { brandisProject, distanceMethods, projectSteps } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

// Dua proyek dari CV: K-Means (skripsi/publikasi) dan Brandis.
// Angka hasil tidak ditampilkan karena tidak ada di CV.
export default function ProjectSection() {
  return (
    <section id="proyek" className="scroll-mt-28 border-t border-border md:scroll-mt-24">
      <div className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 sm:py-16 md:py-20">
        <Reveal>
          <SectionHeading title="Proyek" />

          <p className="max-w-3xl text-base leading-[1.6] text-muted md:text-lg">
            Dua proyek dari CV: riset analisis kepuasan masyarakat dan
            proyek data operasional sekolah.
          </p>

          {/* Proyek 1 — K-Means */}
          <article className="mt-10 min-w-0 rounded-[24px] border border-border bg-panel p-5 sm:mt-12 sm:p-8">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="max-w-3xl text-[clamp(1.25rem,5vw,1.5rem)] font-extrabold break-words text-white">
                Analisis Perbandingan Jarak pada K-Means Clustering
              </h3>
              <p className="shrink-0 rounded-full border border-mint/40 bg-mint/10 px-3 py-1 font-mono text-xs font-semibold tracking-[0.14em] text-mint uppercase">
                Proyek 01
              </p>
            </div>
            <p className="mt-2 max-w-3xl text-base leading-[1.6] text-muted">
              Analisis tingkat kepuasan masyarakat terhadap layanan, dengan
              membandingkan metode jarak pada K-Means Clustering.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full border border-border bg-background-soft px-3 py-1.5 font-mono text-xs font-semibold tracking-wide text-white">
                DATA ANALYSIS
              </span>
              <span className="rounded-full border border-border bg-background-soft px-3 py-1.5 font-mono text-xs font-semibold tracking-wide text-white">
                PYTHON
              </span>
              <span className="rounded-full border border-border bg-background-soft px-3 py-1.5 font-mono text-xs font-semibold tracking-wide text-white">
                RAPIDMINER
              </span>
            </div>

            <div className="mt-8 grid gap-8 sm:mt-10 sm:gap-10 lg:grid-cols-2">
              <div className="min-w-0">
                <h4 className="font-mono text-xs font-semibold tracking-[0.16em] break-words text-amber-soft uppercase sm:tracking-[0.2em]">
                  Cara kerja
                </h4>
                <ol className="mt-5 space-y-0">
                  {projectSteps.map((step) => (
                    <li
                      key={step.code}
                      className="flex gap-3 border-t border-border py-5 last:border-b sm:gap-4"
                    >
                      <span className="shrink-0 font-mono text-sm font-semibold text-mint">
                        {step.code}
                      </span>
                      <div className="min-w-0">
                        <p className="font-bold text-white">{step.title}</p>
                        <p className="mt-1 text-sm leading-relaxed text-muted">
                          {step.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="min-w-0">
                <h4 className="font-mono text-xs font-semibold tracking-[0.16em] break-words text-amber-soft uppercase sm:tracking-[0.2em]">
                  Lima metode jarak yang dibandingkan
                </h4>
                <ul className="mt-5 space-y-3">
                  {distanceMethods.map((method) => (
                    <li
                      key={method.code}
                      className="flex items-baseline justify-between gap-4 rounded-[16px] border border-border bg-background-soft px-4 py-4 transition-colors hover:border-mint/50 sm:px-6 sm:py-5"
                    >
                      <span className="min-w-0 font-bold break-words text-white">{method.name}</span>
                      <span className="shrink-0 font-mono text-xs font-semibold text-mint">
                        {method.code}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-sm leading-relaxed text-muted">
                  Hasil clustering dievaluasi dengan Davies-Bouldin Index dan
                  Silhouette Score. Nilai hasil evaluasinya tidak dicantumkan di
                  sini karena tidak tertulis di CV.
                </p>
              </div>
            </div>
          </article>

          {/* Proyek 2 — Brandis */}
          <article className="mt-6 min-w-0 rounded-[24px] border border-border bg-panel p-5 sm:p-8">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-[clamp(1.25rem,5vw,1.5rem)] font-extrabold break-words text-white">
                {brandisProject.name}
              </h3>
              <p className="shrink-0 rounded-full border border-mint/40 bg-mint/10 px-3 py-1 font-mono text-xs font-semibold tracking-[0.14em] text-mint uppercase">
                Proyek 02
              </p>
            </div>
            <p className="mt-2 font-bold text-white">{brandisProject.role}</p>
            <p className="mt-1 text-sm leading-relaxed break-words text-muted">
              {brandisProject.context}
            </p>
            <p className="mt-3 font-mono text-xs font-semibold tracking-[0.14em] break-words text-amber-soft uppercase">
              {brandisProject.period}
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
        </Reveal>
      </div>
    </section>
  )
}
