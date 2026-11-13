# DESIGN.md — Portofolio Fakhri (Hijau Mint / Jade)

Sumber: gambar referensi kiriman user (Nov 2026). Sistem desain Aether
lama diganti secara keseluruhan dengan sistem di bawah ini.

## Warna

| Token | Nilai | Pakai |
|---|---|---|
| background | `#060a08` | Latar utama (gelap kehijauan, hampir hitam) |
| background-soft | `#0a120d` | Latar kartu / area hero |
| panel | `#0d1a13` | Latar kartu panel |
| panel-2 | `#12241a` | Latar kartu hover / nav pill |
| surface (putih) | `#f4f4f4` | Tombol "Hubungi Saya" |
| mint | `#5eeab8` | Aksen utama: tombol, serif hero, dot aktif |
| jade | `#34d399` | Aksen hijau tua: badge, hover |
| amber | `#fbbf24` | Aksen label mono & badge riset |
| amber-soft | `#fcd34d` | Teks label mono amber |
| blue-cluster | `#93c5fd` | Cluster biru pada ilustrasi K-Means |
| text-primary | `#ffffff` | Judul & teks utama |
| text-secondary | `#a3b3a9` | Deskripsi & metadata |
| border | `#22392d` | Garis & border kartu |

Latar memakai glow radial hijau jade yang sangat halus di area hero
(bukan gradient ungu/biru). Jangan tukar ke mode terang, tanpa
glassmorphism, tanpa shadow berat.

## Tipografi

- Display serif: Fraunces (italic) — hanya untuk kata "Data Analyst"
  di hero dan judul kontak.
- Display & body: Plus Jakarta Sans (fallback Inter). Judul hero
  `clamp(2.75rem, 8vw, 6.375rem)` (~102px desktop), weight 800,
  line-height 1.02, tracking ketat.
- Judul section: Plus Jakarta Sans 28px → 48px, weight 800.
- Label teknis: JetBrains Mono 12px, weight 600, uppercase, tracking
  lebar; label amber untuk subjudul hero.
- Body: Plus Jakarta Sans 16px, line-height 1.6.

## Spacing & bentuk

- Base 8px, gap 16px, padding kartu 32px (desktop) / 20px (mobile),
  padding section 80px (desktop) / 56px (mobile).
- Radius kartu panel: 24px. Radius tombol & chip: 9999px (pill).
- Lebar kontainer: 1240px.

## Struktur

- Header: logo kotak mint "F." + "Fakhri / DATA ANALYST — PEKANBARU",
  nav pill gelap di tengah (Tentang, Pendidikan, Pengalaman, Proyek,
  Pelatihan, Keahlian) dengan item aktif berpill, tombol putih
  "Hubungi Saya" di kanan.
- Hero dua kolom (teks kiri, kartu K-Means kanan): eyebrow pill
  "TERBUKA UNTUK PELUANG DATA ANALYST", judul "Fakhri, Data Analyst
  yang teliti.", subjudul mono amber, paragraf ringkasan, tombol pill
  mint "Lihat Proyek & Riset" + tombol outline "GitHub — Fakhriaja07",
  strip kontak (email, telepon, Pekanbaru, Riau). Kartu kanan:
  "Visualisasi clustering K-Means" + badge "RISET UTAMA", ilustrasi
  3 cluster (hijau kiri-atas, amber kanan-atas, biru tengah-bawah),
  chip 5 metrik jarak, pertanyaan riset.
- Section: Tentang → Pendidikan & Publikasi → Pengalaman → Proyek →
  Pelatihan → Keahlian → Kontak. Judul section diawali eyebrow mono
  amber, kartu panel radius 24px.

## Motion

Reveal halus saat masuk layar, hover lift ringan. Hormati
`prefers-reduced-motion`.

## Responsif (320px – 1920px)

- Judul pakai `clamp()`: hero 44px → 102px, judul section 28px → 48px,
  judul kontak 32px → 56px.
- Grid hero 1 kolom di mobile, 2 kolom di `lg`. Grid section 1 kolom
  di mobile, 2–3 kolom di `md`/`lg`.
- Tombol hero full-width di mobile, inline di `sm` ke atas, tinggi
  tap minimal 44–48px.
- Nav desktop pill di tengah; nav mobile scroll horizontal dalam pill.
  Header sticky, jadi `scroll-mt` section 112px di mobile, 96px di
  desktop.
- `overflow-x: clip` di body sebagai pengaman; tidak ada overflow
  horizontal dokumen.
