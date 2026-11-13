import { contact, distanceMethods, researchQuestion } from '../data/portfolio'
import Reveal from './Reveal'

// Hero gaya referensi: judul besar dua kolom, kartu visualisasi
// clustering K-Means di kanan dengan 3 cluster (hijau, amber, biru).
export default function Hero() {
  return (
    <section id="atas" className="mx-auto max-w-[1240px] px-4 pt-10 pb-14 sm:px-6 sm:pt-14 md:pt-20 md:pb-24">
      <Reveal>
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <div className="min-w-0">
            <p className="inline-flex items-center gap-2 rounded-full border border-mint/40 bg-panel px-4 py-2 font-mono text-[11px] font-semibold tracking-[0.18em] text-mint uppercase sm:text-xs">
              <span className="h-2 w-2 rounded-full bg-mint" aria-hidden="true" />
              Terbuka untuk peluang Data Analyst
            </p>

            <h1 className="mt-6 text-[clamp(2.75rem,8vw,6.375rem)] leading-[1.02] font-extrabold tracking-tight text-white">
              Fakhri,
              <br />
              <span className="font-serif font-semibold italic text-mint">
                Data Analyst
              </span>
              <br />
              yang teliti.
            </h1>

            <p className="mt-6 font-mono text-xs font-semibold tracking-[0.2em] text-amber-soft uppercase sm:text-sm">
              Pengolahan Data • Visualisasi • Riset Terpublikasi
            </p>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              Lulusan{' '}
              <strong className="font-bold text-white">
                S1 Teknik Informatika UIN Sultan Syarif Kasim Riau (IPK
                3.46/4.00)
              </strong>{' '}
              yang mengolah data menjadi laporan dan visualisasi yang mudah
              dipahami — dengan riset{' '}
              <strong className="font-bold text-white">
                K-Means terpublikasi SINTA 4
              </strong>
              , proyek data untuk sekolah, dan pengalaman di instansi
              pemerintah Kota Pekanbaru.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="#proyek"
                className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-mint px-6 text-sm font-bold text-background transition-opacity hover:opacity-85 sm:w-auto"
              >
                Lihat Proyek &amp; Riset ↓
              </a>
              <a
                href={contact.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-border px-6 text-sm font-bold text-white transition-colors hover:border-mint hover:text-mint sm:w-auto"
              >
                GitHub — Fakhriaja07 ↗
              </a>
            </div>

            <p className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted">
              <a href={`mailto:${contact.email}`} className="break-all transition-colors hover:text-mint">
                {contact.email}
              </a>
              <a href={contact.phoneHref} className="transition-colors hover:text-mint">
                {contact.phoneDisplay}
              </a>
              <span>Pekanbaru, Riau</span>
            </p>
          </div>

          <div className="min-w-0 rounded-[24px] border border-border bg-panel p-6 sm:p-8">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="min-w-0">
                <h2 className="text-lg font-extrabold break-words text-white sm:text-xl">
                  Visualisasi clustering K-Means
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Ilustrasi konsep dari riset skripsi — pengelompokan data
                  kepuasan masyarakat.
                </p>
              </div>
              <span className="shrink-0 rounded-full border border-amber/50 bg-amber/10 px-3 py-1.5 font-mono text-[11px] font-semibold tracking-[0.16em] text-amber-soft uppercase">
                Riset Utama
              </span>
            </div>

            <svg
              viewBox="0 0 520 260"
              role="img"
              aria-label="Ilustrasi tiga cluster K-Means: hijau, amber, dan biru"
              className="mt-6 w-full"
            >
              <g stroke="#22392d" strokeWidth="1">
                <line x1="130" y1="0" x2="130" y2="260" />
                <line x1="260" y1="0" x2="260" y2="260" />
                <line x1="390" y1="0" x2="390" y2="260" />
                <line x1="0" y1="65" x2="520" y2="65" />
                <line x1="0" y1="130" x2="520" y2="130" />
                <line x1="0" y1="195" x2="520" y2="195" />
              </g>
              {/* Cluster hijau — kiri atas */}
              <g>
                <circle cx="120" cy="68" r="56" fill="#5eeab8" fillOpacity="0.12" stroke="#5eeab8" strokeOpacity="0.6" strokeDasharray="4 5" />
                <circle cx="120" cy="68" r="13" fill="#5eeab8" />
                <text x="120" y="73" textAnchor="middle" fontSize="13" fontWeight="700" fill="#060a08">×</text>
                <circle cx="92" cy="44" r="5" fill="#5eeab8" />
                <circle cx="150" cy="48" r="5" fill="#5eeab8" />
                <circle cx="88" cy="88" r="5" fill="#5eeab8" />
                <circle cx="142" cy="94" r="5" fill="#5eeab8" />
                <circle cx="108" cy="104" r="5" fill="#5eeab8" />
                <circle cx="160" cy="76" r="4" fill="#5eeab8" />
              </g>
              {/* Cluster amber — kanan atas */}
              <g>
                <circle cx="400" cy="68" r="56" fill="#fbbf24" fillOpacity="0.12" stroke="#fbbf24" strokeOpacity="0.6" strokeDasharray="4 5" />
                <circle cx="400" cy="68" r="13" fill="#fbbf24" />
                <text x="400" y="73" textAnchor="middle" fontSize="13" fontWeight="700" fill="#060a08">×</text>
                <circle cx="372" cy="44" r="5" fill="#fbbf24" />
                <circle cx="428" cy="48" r="5" fill="#fbbf24" />
                <circle cx="368" cy="88" r="5" fill="#fbbf24" />
                <circle cx="424" cy="94" r="5" fill="#fbbf24" />
                <circle cx="388" cy="104" r="5" fill="#fbbf24" />
                <circle cx="440" cy="76" r="4" fill="#fbbf24" />
              </g>
              {/* Cluster biru — tengah bawah */}
              <g>
                <circle cx="260" cy="188" r="56" fill="#93c5fd" fillOpacity="0.12" stroke="#93c5fd" strokeOpacity="0.6" strokeDasharray="4 5" />
                <circle cx="260" cy="188" r="13" fill="#93c5fd" />
                <text x="260" y="193" textAnchor="middle" fontSize="13" fontWeight="700" fill="#060a08">×</text>
                <circle cx="232" cy="164" r="5" fill="#93c5fd" />
                <circle cx="288" cy="168" r="5" fill="#93c5fd" />
                <circle cx="228" cy="208" r="5" fill="#93c5fd" />
                <circle cx="284" cy="214" r="5" fill="#93c5fd" />
                <circle cx="248" cy="224" r="5" fill="#93c5fd" />
                <circle cx="300" cy="196" r="4" fill="#93c5fd" />
              </g>
            </svg>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full border border-border bg-background-soft px-3 py-1.5 font-mono text-xs font-semibold text-white">
                5 metrik jarak dibandingkan
              </span>
              {distanceMethods.map((method) => (
                <span
                  key={method.code}
                  className="rounded-full border border-border bg-background-soft px-3 py-1.5 font-mono text-xs font-semibold text-muted"
                >
                  {method.name}
                </span>
              ))}
            </div>

            <div className="mt-6 border-t border-border pt-5">
              <p className="text-sm leading-relaxed text-muted">
                <strong className="font-bold text-white">
                  Pertanyaan risetnya:
                </strong>{' '}
                {researchQuestion}
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
