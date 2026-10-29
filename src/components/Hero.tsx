import { contact } from '../data/portfolio'
import Reveal from './Reveal'

// Layar pertama: nama besar, peran, dan ringkasan singkat dari CV.
export default function Hero() {
  return (
    <section id="atas" className="mx-auto max-w-6xl px-4 pt-16 pb-20 md:px-6 md:pt-24 md:pb-24">
      <Reveal>
        <p className="font-mono text-xs font-semibold tracking-[0.2em] text-muted uppercase">
          01-A. Data Analyst // Information Technology
        </p>

        <h1 className="mt-6 text-[clamp(3rem,9vw,4rem)] leading-[1.04] font-medium tracking-tight text-white">
          Fakhri<span className="text-muted">.</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
          Mengolah data menjadi perbandingan yang bisa dievaluasi — dari data
          kuesioner kepuasan masyarakat, lewat K-Means Clustering, sampai
          diuji dengan Davies-Bouldin Index dan Silhouette Score.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#proyek"
            className="rounded-lg bg-white px-5 py-3 text-sm font-medium text-black transition-opacity hover:opacity-80"
          >
            Lihat Proyek
          </a>
          <a
            href={contact.cvUrl}
            className="rounded-lg border border-border px-5 py-3 text-sm font-medium text-white transition-colors hover:border-white"
          >
            Unduh CV
          </a>
          <a
            href={contact.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-border px-5 py-3 text-sm font-medium text-white transition-colors hover:border-white"
          >
            GitHub
          </a>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-3">
          <div className="bg-background p-6">
            <p className="font-mono text-xs font-semibold tracking-[0.2em] text-muted">01-A</p>
            <p className="mt-3 font-medium text-white">K-Means Clustering</p>
            <p className="mt-1 text-sm leading-relaxed text-muted">
              Membandingkan metode jarak dalam analisis kepuasan masyarakat.
            </p>
          </div>
          <div className="bg-background p-6">
            <p className="font-mono text-xs font-semibold tracking-[0.2em] text-muted">02-B</p>
            <p className="mt-3 font-medium text-white">Python &amp; RapidMiner</p>
            <p className="mt-1 text-sm leading-relaxed text-muted">
              Dua tools yang dipakai untuk mengolah dan menganalisis data.
            </p>
          </div>
          <div className="bg-background p-6">
            <p className="font-mono text-xs font-semibold tracking-[0.2em] text-muted">03-C</p>
            <p className="mt-3 font-medium text-white">Evaluasi Clustering</p>
            <p className="mt-1 text-sm leading-relaxed text-muted">
              Davies-Bouldin Index dan Silhouette Score sebagai penguji hasil.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
