import { contact } from '../data/portfolio'
import Reveal from './Reveal'

// Layar pertama: nama besar, peran, dan ringkasan singkat dari CV.
export default function Hero() {
  return (
    <section id="atas" className="mx-auto max-w-6xl px-4 pt-12 pb-14 sm:px-6 sm:pt-16 sm:pb-20 md:pt-24 md:pb-24">
      <Reveal>
        <p className="font-mono text-xs font-semibold tracking-[0.16em] break-words text-muted uppercase sm:tracking-[0.2em]">
          01-A. Data Analyst // Information Technology
        </p>

        <h1 className="mt-5 text-[clamp(2.5rem,13vw,4rem)] leading-[1.04] font-medium tracking-tight text-white sm:mt-6">
          Fakhri<span className="text-muted">.</span>
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:mt-6 sm:text-lg md:text-xl">
          Mengolah data menjadi perbandingan yang bisa dievaluasi — dari data
          kuesioner kepuasan masyarakat, lewat K-Means Clustering, sampai
          diuji dengan Davies-Bouldin Index dan Silhouette Score.
        </p>

        <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
          <a
            href="#proyek"
            className="inline-flex min-h-[48px] w-full items-center justify-center rounded-lg bg-white px-5 text-sm font-medium text-black transition-opacity hover:opacity-80 sm:w-auto"
          >
            Lihat Proyek
          </a>
          <a
            href={contact.cvUrl}
            className="inline-flex min-h-[48px] w-full items-center justify-center rounded-lg border border-border px-5 text-sm font-medium text-white transition-colors hover:border-white sm:w-auto"
          >
            Unduh CV
          </a>
          <a
            href={contact.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-[48px] w-full items-center justify-center rounded-lg border border-border px-5 text-sm font-medium text-white transition-colors hover:border-white sm:w-auto"
          >
            GitHub
          </a>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:mt-14 md:mt-16 md:grid-cols-3">
          <div className="min-w-0 bg-background p-5 sm:p-6">
            <p className="font-mono text-xs font-semibold tracking-[0.16em] text-muted sm:tracking-[0.2em]">01-A</p>
            <p className="mt-3 font-medium text-white">K-Means Clustering</p>
            <p className="mt-1 text-sm leading-relaxed text-muted">
              Membandingkan metode jarak dalam analisis kepuasan masyarakat.
            </p>
          </div>
          <div className="min-w-0 bg-background p-5 sm:p-6">
            <p className="font-mono text-xs font-semibold tracking-[0.16em] text-muted sm:tracking-[0.2em]">02-B</p>
            <p className="mt-3 font-medium text-white">Python &amp; RapidMiner</p>
            <p className="mt-1 text-sm leading-relaxed text-muted">
              Dua tools yang dipakai untuk mengolah dan menganalisis data.
            </p>
          </div>
          <div className="min-w-0 bg-background p-5 sm:p-6">
            <p className="font-mono text-xs font-semibold tracking-[0.16em] text-muted sm:tracking-[0.2em]">03-C</p>
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
