import { distanceMethods, projectSteps } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

// Satu-satunya proyek di CV. Angka hasil tidak ditampilkan karena tidak ada di CV.
export default function ProjectSection() {
  return (
    <section id="proyek" className="scroll-mt-28 border-t border-border md:scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 md:py-20">
        <Reveal>
          <SectionHeading
            number="03-A"
            label="Project"
            title="Analisis Perbandingan Jarak pada K-Means Clustering"
          />

          <p className="max-w-3xl text-base leading-[1.6] text-muted md:text-lg">
            Analisis tingkat kepuasan masyarakat terhadap layanan, dengan
            membandingkan metode jarak pada K-Means Clustering.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            <span className="rounded-full border border-border px-3 py-1 font-mono text-xs font-semibold tracking-wide text-white">
              DATA ANALYSIS
            </span>
            <span className="rounded-full border border-border px-3 py-1 font-mono text-xs font-semibold tracking-wide text-white">
              PYTHON
            </span>
            <span className="rounded-full border border-border px-3 py-1 font-mono text-xs font-semibold tracking-wide text-white">
              RAPIDMINER
            </span>
          </div>

          <div className="mt-8 grid gap-8 sm:mt-12 sm:gap-10 lg:grid-cols-2">
            <div className="min-w-0">
              <h3 className="font-mono text-xs font-semibold tracking-[0.16em] break-words text-muted uppercase sm:tracking-[0.2em]">
                Cara kerja
              </h3>
              <ol className="mt-5 space-y-0">
                {projectSteps.map((step) => (
                  <li
                    key={step.code}
                    className="flex gap-3 border-t border-border py-5 last:border-b sm:gap-4"
                  >
                    <span className="shrink-0 font-mono text-sm font-semibold text-muted">
                      {step.code}
                    </span>
                    <div className="min-w-0">
                      <p className="font-medium text-white">{step.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted">
                        {step.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="min-w-0">
              <h3 className="font-mono text-xs font-semibold tracking-[0.16em] break-words text-muted uppercase sm:tracking-[0.2em]">
                Lima metode jarak yang dibandingkan
              </h3>
              <ul className="mt-5 space-y-3">
                {distanceMethods.map((method) => (
                  <li
                    key={method.code}
                    className="flex items-baseline justify-between gap-4 rounded-lg border border-border bg-panel px-4 py-4 transition-colors hover:border-muted sm:px-6 sm:py-5"
                  >
                    <span className="min-w-0 font-medium break-words text-white">{method.name}</span>
                    <span className="shrink-0 font-mono text-xs font-semibold text-muted">
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
        </Reveal>
      </div>
    </section>
  )
}
